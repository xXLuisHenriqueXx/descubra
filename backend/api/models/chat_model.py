from django.db import models
from api.models.session_models import UserSession

class Chat(models.Model):
    ROLE_USER = 'user'
    ROLE_ASSISTANT = 'assistant'
    ROLE_CHOICES = [
        (ROLE_USER, 'User'),
        (ROLE_ASSISTANT, 'Assistant'),
    ]
    session = models.ForeignKey(UserSession, related_name='chats', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    conteudo = models.TextField()
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    openai_message_id = models.TextField(null=True)
    input_tokens = models.IntegerField(default=0, null=True)
    output_tokens = models.IntegerField(default=0, null=True)
    ai_model = models.TextField(null=True)
    processado = models.BooleanField(default=False)

    def __str__(self):
        return f"Chat {self.id} ({self.role}) at {self.timestamp}"