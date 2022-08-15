from rest_framework import serializers

#model
from ..models.record_detail import RecordDetail

class RecordDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = RecordDetail
        fields = '__all__'
        
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'record': instance.record.id,
            'record': {
                'id': instance.record.id,
                'patient': f' {instance.record.patient.first_name} {instance.record.patient.last_name} ',
                'specialist': f' {instance.record.specialist.name.first_name} {instance.record.specialist.name.last_name} '
            },
            'appointment': instance.appointment.id,
            'piece': {
                'id': instance.piece.id,
                'name': instance.piece.name
            },
            'area': {
                'id': instance.area.id,
                'name': instance.area.name
            },
            'diagnosis': instance.diagnosis,
            'treatment': instance.treatment,
            'date': instance.date
        }