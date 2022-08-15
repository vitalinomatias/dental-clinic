from rest_framework import serializers

#model 
from ..models.appointment import Appointment

class AppointmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'