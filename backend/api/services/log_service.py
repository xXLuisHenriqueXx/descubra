from api.models.log_model import LogEntry
from django.utils import timezone
import os
from openai import OpenAI
import requests
from django.db import connection
from api.models.session_models import UserSession
from api.models.chat_model import Chat
from django.db.models import Sum

# Preço por milhão de tokens
model_prices = {
    "gpt-5-nano": {
        "input": 0.050,
        "output": 0.400
    }
}


class LogHelper:
    @staticmethod
    def create_log(message, log_type='INFO', priority=2):
        """
        Cria uma entrada de log no banco de dados.

        :param message: Mensagem de log (string)
        :param log_type: Tipo do log (INFO, WARNING, ERROR, DEBUG)
        :param priority: Prioridade do log (1=Baixa, 2=Média, 3=Alta, 4=Crítica)
        """
        if log_type not in dict(LogEntry.LogType.choices).keys():
            log_type = LogEntry.LogType.INFO
        if priority not in dict(LogEntry.PriorityLevel.choices).keys():
            priority = LogEntry.PriorityLevel.MEDIUM

        log = LogEntry(
            message=message,
            log_type=log_type,
            priority=priority,
            timestamp=timezone.now()
        )
        log.save()
        return log


# Leitura dos limites do sistema a partir de variáveis de ambiente
MAX_TOTAL_MESSAGES = int(os.getenv("MAX_TOTAL_MESSAGES", 0))
MAX_TOTAL_WORDS = int(os.getenv("MAX_TOTAL_WORDS", 0))
MAX_TOTAL_SESSIONS = int(os.getenv("MAX_TOTAL_SESSIONS", 0))


def get_user_rate_status(session: UserSession) -> dict:
    total_messages = Chat.objects.filter(
        session=session, role=Chat.ROLE_USER).count()
    total_words = sum(len(chat.conteudo.split()) for chat in Chat.objects.filter(
        session=session, role=Chat.ROLE_USER))
    return {
        "user_id": session.id,
        "messages_used": total_messages,
        "messages_limit": MAX_TOTAL_MESSAGES,
        "words_used": total_words,
        "words_limit": MAX_TOTAL_WORDS,
    }


def get_system_rate_status() -> dict:
    total_sessions = UserSession.objects.count()
    return {
        "sessions_active": total_sessions,
        "sessions_limit": MAX_TOTAL_SESSIONS,
    }


def get_used_tokens() -> list[dict]:
    models_usage = (
        Chat.objects
        .exclude(ai_model__isnull=True)
        .values("ai_model")
        .annotate(
            total_input_tokens=Sum("input_tokens"),
            total_output_tokens=Sum("output_tokens"),
        )
        .order_by("ai_model")
    )

    usage_list = []
    for usage in models_usage:
        model_name = usage["ai_model"]
        input_tokens = usage.get("total_input_tokens") or 0
        output_tokens = usage.get("total_output_tokens") or 0

        price_info = model_prices.get(model_name, {"input": 0, "output": 0})
        estimated_price = (input_tokens / 1_000_000) * price_info["input"] + \
                          (output_tokens / 1_000_000) * price_info["output"]

        usage_list.append({
            "ai_model": model_name,
            "total_input_tokens": input_tokens,
            "total_output_tokens": output_tokens,
            "estimated_price_usd": round(estimated_price, 6)
        })

    return usage_list



def check_system_health() -> dict:
    health_report = {
        "openai_api": "unknown",
        "database": "unknown",
        "env_vars": "unknown",
        "sessions_status": {},
        "used_tokens": [],
        "status": "OK"
    }

    # Banco de dados
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1;")
        health_report["database"] = "ok"
    except Exception as e:
        health_report["database"] = f"error: {e}"
        LogHelper.create_log(
            f"Erro de banco de dados: {e}", log_type="ERROR", priority=4)
        health_report["status"] = "DEGRADED"

    # OpenAI API básica
    try:
        client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        models = client.models.list()
        health_report["openai_api"] = "ok"
    except Exception as e:
        health_report["openai_api"] = f"error: {e}"
        LogHelper.create_log(
            f"Erro na API da OpenAI: {e}", log_type="ERROR", priority=4)
        health_report["status"] = "DEGRADED"

    # Variáveis de ambiente
    required_vars = ["OPENAI_API_KEY", "MAX_TOTAL_MESSAGES",
                     "MAX_TOTAL_WORDS", "MAX_TOTAL_SESSIONS", "DJANGO_SECRET_KEY", "POSTGRES_DB", "POSTGRES_USER", "POSTGRES_PASSWORD", "DB_HOST", "ADMIN_LOGIN", "ADMIN_PASSWORD"]
    missing = [var for var in required_vars if not os.getenv(var)]
    if missing:
        health_report["env_vars"] = f"missing: {', '.join(missing)}"
        LogHelper.create_log(
            f"Variáveis de ambiente ausentes: {', '.join(missing)}", log_type="WARNING", priority=3)
        health_report["status"] = "DEGRADED"
    else:
        health_report["env_vars"] = "ok"

    # Sessões
    sessions_status = get_system_rate_status()
    health_report["sessions_status"] = sessions_status

    health_report["used_tokens"] = get_used_tokens()

    if sessions_status["sessions_active"] >= sessions_status["sessions_limit"]:
        health_report["status"] = "DEGRADED"
        LogHelper.create_log(
            "Número máximo de sessões ativas atingido.", log_type="WARNING", priority=3)

    return health_report
