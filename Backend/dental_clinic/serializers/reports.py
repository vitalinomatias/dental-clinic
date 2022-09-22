from pyexpat import model
from rest_framework import serializers

#model 
from ..models.appointment import Appointment

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'type_service': instance.type_service,
            'statusTicket': instance.statusTicket,
            'statusAttendance': instance.statusAttendance,
            'date': instance.date,
            'time': instance.time,
            'patient': {
                'id': instance.record.patient.id,
                'cui': instance.record.patient.cui,
                'name': f'{instance.record.patient.first_name} {instance.record.patient.last_name}',
            },
            'specialist': {
                'id': instance.specialist.id,
                'name': f'{instance.specialist.name.first_name} {instance.specialist.name.last_name}',
            }
        }