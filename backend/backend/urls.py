from django.contrib import admin
from django.urls import path, re_path
from api.views.ai_views import AiSendMessageView, AiChatHistoryView, AiLatestMessageView
from api.views.auth_view import AuthView

from api.views import admin_pannel_views
from api.views.dev_populate_view import DevPopulateView
from api.views.frontend_view import frontend


# Swagger imports
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Swagger schema view
schema_view = get_schema_view(
    openapi.Info(
        title="Minha API",
        default_version='v1',
        description="Documentação da API",
        contact=openapi.Contact(email="arthurmorof@hotmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    re_path(r'^(?P<path>assets/.*)$', frontend),
    re_path(r'^(?P<path>vite\.svg)$', frontend),

    path('admin/', admin.site.urls),
    path('api/ai/auth', AuthView.as_view(), name="ai-auth"),
    path('api/ai/send', AiSendMessageView.as_view(), name="ai-send"),
    path('api/ai/history', AiChatHistoryView.as_view(), name="ai-history"),
    path('api/ai/latest', AiLatestMessageView.as_view(), name="ai-latest"),

    path('api/admin/login', admin_pannel_views.AdminPannelLogin.as_view(), name='admin-login'),
    path('api/admin/users_logs', admin_pannel_views.AllUsersLogsView.as_view(), name='users-logs'),
    path('api/admin/user_chats', admin_pannel_views.UserChatsView.as_view(), name='user-chats'),
    path('api/admin/logs_window', admin_pannel_views.LogsWindowView.as_view(), name='logs-window'),
    path('api/admin/health', admin_pannel_views.SystemHealthCheckView.as_view(), name='system-health'),

    path('api/admin/chat/status', admin_pannel_views.ChatStatusView.as_view(), name='chat-status'),
    path('api/admin/chat/activate', admin_pannel_views.ActivateChatView.as_view(), name='chat-activate'),
    path('api/admin/chat/deactivate', admin_pannel_views.DeactivateChatView.as_view(), name='chat-deactivate'),

    path('api/admin/session/activate', admin_pannel_views.ActivateSessionView.as_view(), name='session-activate'),
    path('api/admin/session/deactivate', admin_pannel_views.DeactivateSessionView.as_view(), name='session-deactivate'),


    path('api/dev/populate', DevPopulateView.as_view(), name='dev-populate'),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    re_path(r'^(?!api/).*$', frontend),
]
