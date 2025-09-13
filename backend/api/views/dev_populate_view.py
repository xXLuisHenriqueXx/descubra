from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from api.models.log_model import LogEntry
import random

class DevPopulateView(APIView):
    """
    Rota de desenvolvimento para popular o banco de dados com dados fictícios.
    POST /api/dev/populate
    Body:
    {
        "type": "log",
        "amount": 10,
        "generation_param": "random"
    }
    """
    def post(self, request, *args, **kwargs):
        data = request.data
        type_ = data.get("type")
        amount = data.get("amount")
        generation_param = data.get("generation_param")

        if not type_ or not amount or not generation_param:
            return JsonResponse({"error": "Campos obrigatórios: type, amount, generation_param"}, status=400)

        if type_ == "log":
            if generation_param == "random":
                # Limpa todos os logs existentes
                LogEntry.objects.all().delete()

                # Função para gerar texto lorem ipsum aleatório
                def lorem(min_words=5, max_words=30):
                    words = [
                        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
                        "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
                        "incididunt", "ut", "labore", "et", "dolore", "magna",
                        "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
                        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip",
                        "ex", "ea", "commodo", "consequat"
                    ]
                    return " ".join(random.choices(words, k=random.randint(min_words, max_words))).capitalize() + "."

                log_types = [choice[0] for choice in LogEntry.LogType.choices]
                priorities = [choice[0] for choice in LogEntry.PriorityLevel.choices]

                logs = []
                for _ in range(int(amount)):
                    log = LogEntry(
                        message=lorem(),
                        log_type=random.choice(log_types),
                        priority=random.choice(priorities)
                    )
                    logs.append(log)
                LogEntry.objects.bulk_create(logs)

                return JsonResponse({"message": f"{amount} logs randomicos criados com sucesso."}, status=201)
            else:
                return JsonResponse({"error": "generation_param não suportado para type 'log'."}, status=400)
        else:
            return JsonResponse({"error": f"type '{type_}' não suportado."}, status=400)