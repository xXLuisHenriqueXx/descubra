from django.db import models

class UserSession(models.Model):
    # Possíveis status da sessão:
    STATUS_IDLE = 'idle'
    STATUS_PROCESSING = 'processing'
    STATUS_READY = 'ready'
    STATUS_CHOICES = [
        (STATUS_IDLE, 'Idle - Nada acontecendo'),
        (STATUS_PROCESSING, 'Processing - Em processamento'),
        (STATUS_READY, 'Ready - Resposta pronta'),
    ]
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_IDLE)
    name = models.CharField(max_length=20)
    active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"Session {self.id} (assistant: {self.thread_id}) - {self.status}"