from rest_framework import viewsets
from rest_framework.views import Response

#model
from ..models.appointment import Appointment

#serializer
from ..serializers.appointment import AppointmentSerializers

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})