from pyexpat import model
from rest_framework import serializers

#model
from ..models.patients import Patient

class PatientSerializers(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        
class ErrorPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('cui', 'first_name', 'last_name')