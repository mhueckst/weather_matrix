FROM python:3.10-alpine

#COPY . /app


WORKDIR /app
COPY . .

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
#ENV

#COPY ./requirements.txt /app
RUN pip install -r requirements.txt


EXPOSE 8000

CMD ["python3", "manage.py", "runserver" ,"0.0.0.0:8000"]