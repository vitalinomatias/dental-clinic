from rest_framework import serializers

#model
from ..models.areas import Area

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'