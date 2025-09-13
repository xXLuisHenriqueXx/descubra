import json
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from django.http import JsonResponse
from api.services.auth_service import validate_auth_token
from api.services.ai_service import send_message, get_chat_history, get_last_unprocessed_message
from api.serializers import (
    AiMessageSerializer,
    ChatResponseSerializer,
    AiChatHistorySerializer,
    LatestMessageSerializer
)

class AiSendMessageView(APIView):
    @swagger_auto_schema(
        request_body=AiMessageSerializer,
        responses={200: ChatResponseSerializer, 400: 'Erro de validação', 401: 'Não autorizado'},
        operation_description="Envia uma mensagem para a sessão atual. O token de autenticação deve estar presente no cookie `auth_token`.",
        tags=['Chat']
    )
    def post(self, request, *args, **kwargs):
        auth_token = request.COOKIES.get("auth_token")
        if not auth_token:
            return JsonResponse({"error": "Token de autenticação ausente"}, status=401)

        is_valid, decoded_data = validate_auth_token(auth_token)
        if not is_valid or decoded_data is None:
            return JsonResponse({"error": "Token de autenticação inválido"}, status=401)

        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "JSON inválido"}, status=400)

        session_id = decoded_data["session_id"]

        required_fields = ["message"]
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return JsonResponse(
                {"error": "Argumentos obrigatórios ausentes", "missing": missing_fields},
                status=400
            )

        message = data["message"]
        try:
            send_message(session_id, message)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

        return JsonResponse({"message": "Mensagem enviada com sucesso"}, status=200)


class AiChatHistoryView(APIView):
    @swagger_auto_schema(
        responses={200: AiChatHistorySerializer, 401: 'Não autorizado'},
        operation_description="Obtém o histórico de mensagens do chat para a sessão atual. O token deve estar no cookie `auth_token`.",
        tags=['Chat']
    )
    def get(self, request, *args, **kwargs):
        auth_token = request.COOKIES.get("auth_token")
        if not auth_token:
            return JsonResponse({"error": "Token de autenticação ausente"}, status=401)

        is_valid, decoded_data = validate_auth_token(auth_token)
        if not is_valid or decoded_data is None:
            return JsonResponse({"error": "Token de autenticação inválido"}, status=401)

        session_id = decoded_data["session_id"]
        history = get_chat_history(session_id)
        return JsonResponse({"history": history}, safe=False, status=200)


class AiLatestMessageView(APIView):
    @swagger_auto_schema(
        responses={200: LatestMessageSerializer, 404: 'Nenhuma nova mensagem', 401: 'Não autorizado'},
        operation_description="Obtém a última mensagem não processada da sessão atual. "
                              "Se não houver mensagens novas, retorna status 404.",
        tags=['Chat']
    )
    def get(self, request, *args, **kwargs):
        auth_token = request.COOKIES.get("auth_token")
        if not auth_token:
            return JsonResponse({"error": "Token de autenticação ausente"}, status=401)

        is_valid, decoded_data = validate_auth_token(auth_token)
        if not is_valid or decoded_data is None:
            return JsonResponse({"error": "Token de autenticação inválido"}, status=401)

        session_id = decoded_data["session_id"]
        latest_message = get_last_unprocessed_message(session_id)
        if latest_message:
            data = {
                "role": latest_message.role,
                "conteudo": latest_message.conteudo,
                "timestamp": latest_message.timestamp.isoformat()
            }
            return JsonResponse(data, safe=False, status=200)
        else:
            return JsonResponse({"message": "Nenhuma mensagem nova"}, status=404)
