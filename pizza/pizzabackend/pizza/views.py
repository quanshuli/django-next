from django.shortcuts import render
from rest_framework import serializers, viewsets
from rest_framework.authentication import BasicAuthentication

from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Pizza
from .serializers import PizzaSerializer

# Create your views here.


class PizzaViewSet(viewsets.ModelViewSet):
    authentication_classes = (BasicAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
