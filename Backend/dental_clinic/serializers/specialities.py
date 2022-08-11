from rest_framework import serializers


from ..models.specialities import Speciality

class SpecialitiesSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Speciality
        fields = '__all__'