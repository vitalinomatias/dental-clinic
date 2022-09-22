from rest_framework import serializers

#model
from ..models.records import Record

class RecordSerializers(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'
        
    def to_representation(self, instance):
        
        # if (instance.specialist.id):    
        #     return {
        #         'id': instance.id,
        #         'patient': {
        #             'id':instance.patient.id,
        #             'cui':instance.patient.cui,
        #             'first_name':instance.patient.first_name,
        #             'last_name':instance.patient.last_name,
        #             'birthday':instance.patient.birthday,
        #             'age':instance.patient.age,
        #             'career':instance.patient.career,
        #             'year':instance.patient.year,
        #             'residence':instance.patient.residence,
        #             'fono':instance.patient.fono,
        #             'prevision':instance.patient.prevision
        #         },
        #         'specialist': {
        #             'id': instance.specialist.id,
        #             'first_name': instance.specialist.name.first_name,
        #             'last_name': instance.specialist.name.last_name,
        #             'speciality': {
        #                 'id': instance.specialist.speciality.id,
        #                 'name': instance.specialist.speciality.name
        #             }
        #         }
        #     }
        # else:
        return {
            'id': instance.id,
            'patient': {
                'id':instance.patient.id,
                'cui':instance.patient.cui,
                'first_name':instance.patient.first_name,
                'last_name':instance.patient.last_name,
                'birthday':instance.patient.birthday,
                'age':instance.patient.age,
                'career':instance.patient.career,
                'year':instance.patient.year,
                'residence':instance.patient.residence,
                'fono':instance.patient.fono,
                'prevision':instance.patient.prevision
            }
        }
            