import os
from django.conf import settings
from django.http import FileResponse, Http404

def frontend(request, path='index.html'):
    build_dir = os.path.join(settings.BASE_DIR,'api', 'static', 'frontend', 'dist')
    file_path = os.path.join(build_dir, path)

    if not os.path.exists(file_path):
        # Se não for um arquivo estático, retorna o index.html (SPA)
        file_path = os.path.join(build_dir, 'index.html')
        if not os.path.exists(file_path):
            raise Http404("Arquivo não encontrado.")

    return FileResponse(open(file_path, 'rb'))