from rest_framework import serializers

#model
from ..models.patients import Patient

class PatientSerializers(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'