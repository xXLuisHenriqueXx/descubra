FROM python:latest

WORKDIR /app

COPY dependencies.txt .

RUN pip install --no-cache-dir -r dependencies.txt

COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

