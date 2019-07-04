from rest-framework import serializers
from cars.models import Car


class CarDetailSerializer(serializers.ModelSerialier):
    class Meta:
        model = Car
        fields = '__all__'
