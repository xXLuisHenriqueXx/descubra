from api.services.auth_service import validate_auth_token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, exceptions
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from django.http import JsonResponse
from django.utils import timezone
from django.core import signing
import os

from api.models.log_model import LogEntry
from api.models.session_models import UserSession
from api.models.chat_model import Chat
from api.serializers import (
    AdminLoginSerializer,
    UserSessionLogSerializer,
    ChatLogSerializer,
    AuthResponseSerializer,
    LogEntrySerializer,
    SystemHealthResponseSerializer
)

from api.services.log_service import check_system_health 


class AdminPannelLogin(APIView):
    @swagger_auto_schema(
        request_body=AdminLoginSerializer,
        responses={
            200: AuthResponseSerializer,
            401: 'Credenciais inválidas.'
        },
        operation_description="Autentica um administrador. Recebe um login e senha e retorna um cookie para o browser do usuário. Não é necessário fazer nenhuma operação com o cookie, só fazer as outras requisições do painel de admin.",
        tags=["Autenticação de admin"],
    )
    def post(self, request, *args, **kwargs):
        admin_username = os.getenv("ADMIN_LOGIN")
        admin_password = os.getenv("ADMIN_PASSWORD")

        if not admin_username or not admin_username:
            return JsonResponse({'message': "Credenciais inválidas"}, status=401)

        username = request.data.get("username")
        password = request.data.get("password")

        if admin_username == username and admin_password == password:
            token_data = {
                'role': 'admin',
                'timestamp': timezone.now().isoformat()
            }
            token = signing.dumps(token_data)
            response = JsonResponse({'message': 'Administrador autenticado com sucesso.'})
            response.set_cookie("auth_token", token, httponly=True, samesite='Lax')
            return response

        return JsonResponse({'message': 'Credenciais inválidas.'}, status=401)


class BaseAdminLogView(APIView):
    """
    Base view para todas as views de admin. Valida token de admin no cookie.
    """
    def initial(self, request, *args, **kwargs):
        """
        Executa antes de qualquer método HTTP (get, post, etc.).
        """
        super().initial(request, *args, **kwargs)

        token = request.COOKIES.get("auth_token")
        if not token:
            raise exceptions.AuthenticationFailed(detail="Token não fornecido.")

        try:
            is_valid, payload = validate_auth_token(token)
        except Exception:
            raise exceptions.AuthenticationFailed(detail="Token inválido.")

        if not payload or payload.get("role") != "admin":
            raise exceptions.PermissionDenied(detail="Acesso não autorizado.")

        # Se quiser, pode salvar o payload no request para uso posterior
        request.admin_payload = payload


class AllUsersLogsView(BaseAdminLogView):
    @swagger_auto_schema(
        operation_description="Retorna a tabela de usuários. Não é necessário nenhum parâmetro, apenas token de admin no browser.",
        tags=["Logs Admin"],
        manual_parameters=[
            openapi.Parameter(
                name="auth_token",
                in_=openapi.IN_HEADER,
                type=openapi.TYPE_STRING,
                description="Token de autenticação do administrador",
                required=False
            )
        ],
        responses={200: UserSessionLogSerializer(many=True)}
    )
    def get(self, request, *args, **kwargs):
        users = UserSession.objects.all()
        serializer = UserSessionLogSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChatsView(BaseAdminLogView):
    @swagger_auto_schema(
        operation_description="Retorna o chat de um usuário com o a query user_id. Precisa de token de autenticação no browser para funcoonar.",
        tags=["Logs Admin"],
        manual_parameters=[
            openapi.Parameter(
                name="auth_token",
                in_=openapi.IN_HEADER,
                type=openapi.TYPE_STRING,
                description="Token de autenticação do administrador",
                required=False
            ),
            openapi.Parameter(
                name="user_id",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_INTEGER,
                description="ID do usuário para filtrar os chats",
                required=True
            )
        ],
        responses={
            200: ChatLogSerializer(many=True),
            400: 'Parâmetro `user_id` é necessário.',
            404: 'Usuário não encontrado.'
        }
    )
    def get(self, request, *args, **kwargs):
        user_id = request.query_params.get('user_id')
        if not user_id:
            return Response({"error": "Parâmetro 'user_id' é necessário."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = UserSession.objects.get(id=user_id)
        except UserSession.DoesNotExist:
            return Response({"error": "Usuário não encontrado."}, status=status.HTTP_404_NOT_FOUND)

        chats = Chat.objects.filter(session=user).order_by('timestamp')
        serializer = ChatLogSerializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogsWindowView(BaseAdminLogView):
    @swagger_auto_schema(
        operation_description=(
            "Retorna logs em ordem decrescente (mais recentes primeiro), usando índices para paginação. "
            "Use 'inicio=0&offset=20' para os 20 logs mais recentes. "
            "Para carregar mais antigos, aumente 'inicio' (ex: inicio=20&offset=20) e insira na lista já renderizada."
        ),
        tags=["Logs Admin"],
        manual_parameters=[
            openapi.Parameter(
                name="auth_token",
                in_=openapi.IN_HEADER,
                type=openapi.TYPE_STRING,
                description="Token de autenticação do administrador",
                required=False
            ),
            openapi.Parameter(
                name="inicio",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_INTEGER,
                description="Índice inicial (0 = log mais recente)",
                required=True
            ),
            openapi.Parameter(
                name="offset",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_INTEGER,
                description="Número de logs a retornar a partir do índice inicial",
                required=True
            ),
        ],
        responses={
            200: LogEntrySerializer(many=True),
            400: 'Parâmetros inválidos.'
        }
    )
    def get(self, request, *args, **kwargs):
        try:
            inicio = int(request.query_params.get("inicio", 0))
            offset = int(request.query_params.get("offset", 20))
            if inicio < 0 or offset <= 0:
                raise ValueError()
        except (ValueError, TypeError):
            return Response({
                "error": "Os parâmetros 'inicio' e 'offset' devem ser inteiros válidos (inicio ≥ 0, offset > 0)."
            }, status=status.HTTP_400_BAD_REQUEST)

        logs = LogEntry.objects.order_by('-timestamp')[inicio:inicio + offset]
        serializer = LogEntrySerializer(logs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SystemHealthCheckView(BaseAdminLogView):
    @swagger_auto_schema(
        operation_description="Retorna as métricas e estado de saúde do sistema.",
        tags=["Logs Admin"],
        manual_parameters=[
            openapi.Parameter(
                name="auth_token",
                in_=openapi.IN_HEADER,
                type=openapi.TYPE_STRING,
                description="Token de autenticação do administrador",
                required=False
            )
        ],
        responses={200: SystemHealthResponseSerializer}
    )
    def get(self, request, *args, **kwargs):
        health_data = check_system_health()
        return Response(health_data, status=status.HTTP_200_OK)
