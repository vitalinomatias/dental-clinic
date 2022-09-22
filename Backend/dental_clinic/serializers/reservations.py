from rest_framework import serializers

#model
from ..models.reservations import Reservation

class ReservationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
    
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'date' : instance.date,
            'time' : instance.time,
            'patient': {
                'id': instance.patient.id,
                'cui': instance.patient.cui,
                'first_name': instance.patient.first_name,
                'last_name': instance.patient.last_name,
                'birthday': instance.patient.birthday,
                'age': instance.patient.age,
                'career': instance.patient.career,
                'year': instance.patient.year,
                'residence': instance.patient.residence,
                'fono': instance.patient.fono,
                'prevision': instance.patient.prevision,
            },
            'specialist': instance.specialist.name.first_name,
            'specialist': {
                'id' : instance.specialist.id,
                'username': instance.specialist.name.username,
                'first_name': instance.specialist.name.first_name,
                'last_name': instance.specialist.name.last_name,
                'speciality': instance.specialist.speciality.name,
            },
            'status': instance.status
        }
    