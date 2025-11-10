from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .history import setup_history, add_to_history

# Criando e configurando as Views do Projeto
@api_view(['GET'])
def hello(request):
    return Response({"message": "Olá do back-end Django!"})
