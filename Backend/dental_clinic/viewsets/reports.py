from rest_framework import viewsets
from rest_framework.views import Response
from datetime import date, datetime, timedelta

#model
from ..models.appointment import Appointment

from ..serializers.appointment import AppointmentSerializers

from ..serializers.reports import ReportSerializer



class Report(viewsets.ModelViewSet):
    
    def list(self, request, *args, **kwargs):
        
        start_date = self.request.query_params.get('start')
        end_date = self.request.query_params.get('end')
        patient = self.request.query_params.get('patient')
        specialist = self.request.query_params.get('specialist')
        status = self.request.query_params.get('status')
        
        
        print(f'fecha inicio: {start_date}')
        print(f'fecha final: {end_date}')
        print(f'paciente: {patient}')
        print(f'especialista: {specialist}')
        
        if (patient is None):
            queryset = Appointment.objects.filter(date__range=[start_date, end_date], specialist=specialist, statusAttendance=status)#.values('record')
            print(str(queryset.query))
        else:
            queryset = Appointment.objects.filter(specialist=specialist, record__patient__id=patient, statusAttendance=status)
            print(str(queryset.query))
        
        
        
        result = ReportSerializer(queryset, many=True)
        
        cant= len(result.data)
        
        return Response({'status': True, 'message': 'Exito', 'cant': cant, 'data': result.data})
    
    
    

# SELECT 
# "dental_clinic_appointment"."id", 
# "dental_clinic_appointment"."record_id",
# "dental_clinic_appointment"."observation",
# "dental_clinic_appointment"."type_service",
# "dental_clinic_appointment"."indication",
# "dental_clinic_appointment"."statusTicket",
# "dental_clinic_appointment"."statusAttendance",
# "dental_clinic_appointment"."specialist_id",
# "dental_clinic_appointment"."date",
# "dental_clinic_appointment"."time" 
# FROM "dental_clinic_appointment" 
# INNER JOIN "dental_clinic_record" ON ("dental_clinic_appointment"."record_id" = "dental_clinic_record"."id") 
# WHERE ("dental_clinic_record"."patient_id" = 36 AND "dental_clinic_appointment"."specialist_id" = 1 AND "dental_clinic_appointment"."statusAttendance" = 1)

# SELECT
# "dental_clinic_appointment"."id",
# "dental_clinic_appointment"."record_id",
# "dental_clinic_appointment"."observation",
# "dental_clinic_appointment"."type_service",
# "dental_clinic_appointment"."indication",
# "dental_clinic_appointment"."statusTicket",
# "dental_clinic_appointment"."statusAttendance",
# "dental_clinic_appointment"."specialist_id",
# "dental_clinic_appointment"."date",
# "dental_clinic_appointment"."time"
# FROM "dental_clinic_appointment"
# WHERE ("dental_clinic_appointment"."date" BETWEEN 2022-07-01 AND 2022-08-26 AND "dental_clinic_appointment"."specialist_id" = 1 AND "dental_clinic_appointment"."statusAttendance" = 1)
