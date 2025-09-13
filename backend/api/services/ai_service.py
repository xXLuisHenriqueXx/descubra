import os
import threading
import openai
from openai import OpenAI
import json

from api.models.session_models import UserSession
from api.models.chat_model import Chat

from datetime import timedelta
from django.utils import timezone

assistants_path = os.path.join(os.path.dirname(
    __file__), '../static/assistants.json')
with open(assistants_path, 'r') as f:
    assistants = json.load(f)["assistants"]

# Configura a chave da API da OpenAI a partir da variável de ambiente
openai.api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI()

# Constantes para rate limit
MAX_TOTAL_MESSAGES = int(os.getenv("MAX_TOTAL_MESSAGES"))
MAX_TOTAL_WORDS = int(os.getenv("MAX_TOTAL_WORDS"))
MAX_TOTAL_SESSIONS = int(os.getenv("MAX_TOTAL_SESSIONS"))


def _build_context(session: UserSession):
    chats = Chat.objects.filter(session=session).order_by('timestamp')
    context = []
    context.append({
        'role': 'system',
        'content': assistants['instructions'],
    })
    for chat in chats:
        context.append({
            'role': chat.role,
            'content': chat.conteudo,
        })
    return context


def _count_words(session: UserSession) -> int:
    chats = Chat.objects.filter(session=session, role=Chat.ROLE_USER)
    if not chats.exists():
        return 0
    return sum(len(chat.conteudo.split()) for chat in chats)


def _check_rate_limit(session: UserSession):
    total_messages = Chat.objects.filter(
        session=session, role=Chat.ROLE_USER).count()
    if total_messages >= MAX_TOTAL_MESSAGES:
        raise Exception("Limite de mensagens atingido.")

    total_words = _count_words(session)
    if total_words >= MAX_TOTAL_WORDS:
        raise Exception("Limite de tokens/palavras atingido.")

    total_sessions = UserSession.objects.count()
    if total_sessions >= MAX_TOTAL_SESSIONS:
        raise Exception(
            "Limite de sessões atingido. Tente novamente mais tarde.")


def _process_assistant_response(session: UserSession):
    try:
        last_assistant_msg = Chat.objects.filter(
            session=session,
            role=Chat.ROLE_ASSISTANT,
            openai_message_id__isnull=False
        ).order_by('-timestamp').first()

        use_chain = False
        previous_response_id = None

        if last_assistant_msg and last_assistant_msg.timestamp >= timezone.now() - timedelta(days=30):
            use_chain = True
            previous_response_id = last_assistant_msg.openai_message_id

        last_user_msg = Chat.objects.filter(
            session=session,
            role=Chat.ROLE_USER,
        ).order_by('-timestamp').first()

        user_input = last_user_msg.conteudo if last_user_msg else ""

        if use_chain:
            print("Chats anteriores detectados", flush=True)
            response = client.responses.create(
                model=assistants['model'],
                input=user_input,
                previous_response_id=previous_response_id,
                reasoning={"effort": assistants['reasoning_effort']},
                tools=[{
                    "type": "file_search",
                    "vector_store_ids": [assistants['vector_store_id']]
                }],
                store=True
            )
        else:
            print("Novo contexto necessário", flush=True)
            context = [
                {"role": "system", "content": assistants['instructions']},
            ]
            if last_user_msg:
                context.append(
                    {"role": "user", "content": last_user_msg.conteudo})
            response = client.responses.create(
                model=assistants['model'],
                input=context,
                reasoning={"effort": assistants['reasoning_effort']},
                tools=[{
                    "type": "file_search",
                    "vector_store_ids": [assistants['vector_store_id']]
                }],
                store=True
            )

        response_text = response.output_text
        response_id = response.id
        input_tokens = getattr(response.usage, "input_tokens", None)
        output_tokens = getattr(response.usage, "output_tokens", None)

        assistant_chat = Chat.objects.filter(
            session=session,
            role=Chat.ROLE_ASSISTANT,
            processado=False
        ).order_by('-timestamp').first()

        if assistant_chat:
            assistant_chat.conteudo = response_text
            assistant_chat.openai_message_id = response_id
            assistant_chat.input_tokens = input_tokens
            assistant_chat.output_tokens = output_tokens
            assistant_chat.ai_model = assistants['model']
            assistant_chat.save()
        else:
            Chat.objects.create(
                session=session,
                conteudo=response_text,
                role=Chat.ROLE_ASSISTANT,
                openai_message_id=response_id,
                input_tokens=input_tokens,
                output_tokens=output_tokens,
                ai_model=assistants['model'],
                processado=False
            )
    except Exception as e:
        response_text = f"Desculpe, ocorreu um erro ao processar sua mensagem. Erro: {str(e)}"
        assistant_chat = Chat.objects.filter(
            session=session,
            role=Chat.ROLE_ASSISTANT,
            processado=False
        ).order_by('-timestamp').first()
        if assistant_chat:
            assistant_chat.conteudo = response_text
            assistant_chat.openai_message_id = None
            assistant_chat.save()
        else:
            Chat.objects.create(
                session=session,
                conteudo=response_text,
                role=Chat.ROLE_ASSISTANT,
                openai_message_id=None,
                processado=False
            )
    session.status = UserSession.STATUS_READY
    session.save()


def send_message(user_id: int, message: str) -> None:
    try:
        session = UserSession.objects.get(id=user_id)
    except UserSession.DoesNotExist:
        raise Exception("Sessão não encontrada.")

    if Chat.objects.filter(session=session, role=Chat.ROLE_ASSISTANT, processado=False).exists() or session.status == UserSession.STATUS_PROCESSING:
        raise Exception(
            "Aguarde a resposta do assistente antes de enviar nova mensagem.")

    _check_rate_limit(session)

    Chat.objects.create(
        session=session,
        conteudo=message,
        role=Chat.ROLE_USER,
        openai_message_id=None,
        input_tokens=None,
        output_tokens=None,
        processado=True
    )

    session.status = UserSession.STATUS_PROCESSING
    session.save()

    threading.Thread(target=_process_assistant_response,
                     args=(session,)).start()


def get_last_unprocessed_message(user_id: int):
    try:
        session = UserSession.objects.get(id=user_id)
    except UserSession.DoesNotExist:
        return None

    if session.status != UserSession.STATUS_READY:
        return None

    latest_message = Chat.objects.filter(
        session=session,
        role=Chat.ROLE_ASSISTANT,
        processado=False
    ).order_by('-timestamp').first()

    if latest_message:
        latest_message.processado = True
        latest_message.save()

    session.status = UserSession.STATUS_IDLE
    session.save()

    return latest_message


def get_chat_history(user_id: int) -> list:
    try:
        session = UserSession.objects.get(id=user_id)
    except UserSession.DoesNotExist:
        return []

    chats = Chat.objects.filter(session=session).order_by('timestamp')
    history = []
    for chat in chats:
        history.append({
            'role': chat.role,
            'conteudo': chat.conteudo,
            'timestamp': chat.timestamp.isoformat(),
            'openai_message_id': chat.openai_message_id,
            'input_tokens': chat.input_tokens,
            'output_tokens': chat.output_tokens,
            'model': chat.ai_model
        })
    return history
