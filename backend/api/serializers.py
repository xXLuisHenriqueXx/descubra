from rest_framework import serializers
from api.models.session_models import UserSession
from api.models.chat_model import Chat
from api.models.log_model import LogEntry

class SessionDataSerializer(serializers.Serializer):
    status = serializers.CharField()
    name = serializers.CharField()
    answered_vocational_test = serializers.BooleanField()

class AuthResponseSerializer(serializers.Serializer):
    message = serializers.CharField()
    session_data = SessionDataSerializer(required=False)

class AuthNameSerializer(serializers.Serializer):
    name = serializers.CharField()

class ChatHistoryItemSerializer(serializers.Serializer):
    role = serializers.CharField()
    conteudo = serializers.CharField()
    timestamp = serializers.DateTimeField()

class AiChatHistorySerializer(serializers.Serializer):
    history = serializers.ListSerializer(child=ChatHistoryItemSerializer())

class AiMessageSerializer(serializers.Serializer):
    message = serializers.CharField()

class ChatResponseSerializer(serializers.Serializer):
    message = serializers.CharField()

class LatestMessageSerializer(serializers.Serializer):
    role = serializers.CharField()
    conteudo = serializers.CharField()
    timestamp = serializers.DateTimeField()

class VocationalAnswerSerializer(serializers.Serializer):
    answer = serializers.IntegerField(help_text="Valor entre 0 e 1 (ou -1 para cancelar)", max_value=1, min_value=-1)

class VocationalQuestionResponseSerializer(serializers.Serializer):
    question_id = serializers.IntegerField()
    question_text = serializers.CharField()

class VocationalEvaluationResponseSerializer(serializers.Serializer):
    top_categories = serializers.ListField(
        child=serializers.CharField(),
        help_text="Lista de categorias com melhor correspondência vocacional"
    )
    evaluation = serializers.CharField(help_text="Feedback gerado por IA baseado nas respostas do usuário")

class SystemHealthResponseSerializer(serializers.Serializer):
    openai_api = serializers.CharField(
        help_text="Status da conexão com a API da OpenAI. Ex: 'ok' ou 'error: ...'"
    )
    database = serializers.CharField(
        help_text="Status da conexão com o banco de dados. Ex: 'ok' ou 'error: ...'"
    )
    env_vars = serializers.CharField(
        help_text="Status das variáveis de ambiente requeridas. Ex: 'ok' ou 'missing: VAR1, VAR2'"
    )
    sessions_status = serializers.DictField(
        child=serializers.IntegerField(),
        help_text="Status da criação de sessões. Ex: {'sessions_active': 3, 'sessions_limit': 10}"
    )
    status = serializers.CharField(
        help_text="Status geral do sistema. Ex: 'OK' ou 'DEGRADED'"
    )

class AdminLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class UserSessionLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSession
        fields = ['id', 'created_at', 'status', 'name']

class ChatLogSerializer(serializers.ModelSerializer):
    session_id = serializers.IntegerField(source='session.id')
    class Meta:
        model = Chat
        fields = ['id', 'timestamp', 'conteudo', 'role', 'processado', 'session_id']

class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = ['id', 'message', 'timestamp', 'log_type', 'priority']
