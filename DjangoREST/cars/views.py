from django.shortcuts import render
from rest_frameork import generics
from cars.serializers import CarDetailSerializer

class CarCreateView(generics.CreateAPIView):
    serializer_class = ...
