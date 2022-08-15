from configparser import InterpolationSyntaxError
from pyexpat import model
from rest_framework import serializers


from ..models.specialities import Speciality, Specialist

class SpecialitiesSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Speciality
        fields = '__all__'
        
class SpecialistSerializers(serializers.ModelSerializer):
    class Meta:
        model = Specialist
        fields = '__all__'
        
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'name': f'{instance.name.first_name} {instance.name.last_name}',
            'speciality': {
                'id': instance.speciality.id,
                'name': instance.speciality.name
            },
            'status': instance.status
        }