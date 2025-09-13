from django.db import models

class LogEntry(models.Model):
    class LogType(models.TextChoices):
        INFO = 'INFO', 'Informação'
        WARNING = 'WARNING', 'Aviso'
        ERROR = 'ERROR', 'Erro'
        DEBUG = 'DEBUG', 'Depuração'

    class PriorityLevel(models.IntegerChoices):
        LOW = 1, 'Baixa'
        MEDIUM = 2, 'Média'
        HIGH = 3, 'Alta'
        CRITICAL = 4, 'Crítica'

    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    log_type = models.CharField(max_length=10, choices=LogType.choices, default=LogType.INFO)
    priority = models.IntegerField(choices=PriorityLevel.choices, default=PriorityLevel.MEDIUM)

    def __str__(self):
        return f"[{self.get_log_type_display()} | {self.get_priority_display()}] {self.message[:50]}"
