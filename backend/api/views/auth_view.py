import json
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from django.http import JsonResponse
from django.core import signing

from api.models.session_models import UserSession
from api.services.auth_service import get_session_status, validate_auth_token
from api.serializers import AuthResponseSerializer, AuthNameSerializer

from api.services.log_service import LogHelper


class AuthView(APIView):

    @swagger_auto_schema(
        responses={200: AuthResponseSerializer},
        operation_description="Autentica o usuário por meio de um cookie de sessão. "
                              "Se já houver uma sessão ativa, retorna o status da sessão, se já respondeu o teste vocacional e o nome do usuário.",
        tags=["Autenticação"],
        manual_parameters=[
            openapi.Parameter(
                name="auth_token",
                in_=openapi.IN_HEADER,
                type=openapi.TYPE_STRING,
                description="Token de autenticação no cookie (gerenciado automaticamente pelo navegador)",
                required=False
            )
        ]
    )
    def get(self, request, *args, **kwargs):
        auth_token = request.COOKIES.get("auth_token")
        if auth_token:
            try:
                data = signing.loads(auth_token)
                session_id = data.get('session_id')
                session_data = UserSession.objects.filter(id=session_id).first()
                return JsonResponse(
                    {
                        'message': 'Sessão já existente.',
                        'session_data': {'status': session_data.status, 'name': session_data.name}
                    },
                    status=200
                )
            except signing.BadSignature:
                pass

        session = UserSession.objects.create()
        token = signing.dumps({'session_id': session.id})
        response = JsonResponse({'message': 'Autenticado com sucesso.'})
        response.set_cookie('auth_token', token, httponly=True, samesite='Lax')
        LogHelper.create_log("Novo usuário criado", 'INFO', 1)
        return response

    @swagger_auto_schema(
            request_body=AuthNameSerializer,
            responses={200: 'Nome de usuário alterado com sucesso'},
            operation_description="Coloca um nome na tabela do usuário detentor do cookie. Só é necessário o campo 'name' no body.",
            tags=["Autenticação"],
            manual_parameters=[
                openapi.Parameter(
                    name="auth_token",
                    in_=openapi.IN_HEADER,
                    type=openapi.TYPE_STRING,
                    description="Token de autenticação no cookie (gerenciado automaticamente pelo navegador)",
                    required=False
                )
            ]
        )
    def patch(self, request, *args, **kwargs):
        auth_token = request.COOKIES.get("auth_token")
        if not auth_token:
            return JsonResponse({"error": "Token de autenticação ausente"}, status=401)

        is_valid, decoded_data = validate_auth_token(auth_token)
        if not is_valid or decoded_data is None:
            return JsonResponse({"error": "Token de autenticação inválido"}, status=401)

        try:
            session_id = decoded_data["session_id"]
        except:
            return JsonResponse({"error": "Id de usuário não encontrado"})
        
        try:
            session = UserSession.objects.get(id=session_id)
        except UserSession.DoesNotExist:
            return JsonResponse({"error": "Sessão não encontrada."}, status=404)
        
        try:
            data = json.loads(request.body)
            name = data['name']
        except KeyError:
            return JsonResponse({"error": "Um nome precisa ser enviado"}, status=400)
        
        session.name = name
        session.save()
        return JsonResponse({"message": "Nome de usuário alterado com sucesso"}, status=200)

    