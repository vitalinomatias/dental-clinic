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
    
    def create(self, request, *args, **kwargs):
        data = super().create(request, *args, **kwargs)
        return Response({'status': True, 'message': 'Exito', 'data': data.data})
    
    def update(self, request, *args, **kwargs):
        
        data =  super().update(request, *args, **kwargs)
        return Response({'status': True, 'message': 'Exito', 'data': data.data})

class SearchAppointmentViewSet(viewsets.ModelViewSet):
    
    def list(self, request, id, *args, **kwargs):
        queryset = Appointment.objects.filter(record__id=id)
        result = AppointmentSerializers(queryset, many=True)
        
        if result.data == []:
            print(result.data)
            return Response({'status': False, 'message': 'No existe'})
        else:
            print(result.data)
            return Response({'status': True, 'message': 'Exito', 'data': result.data})