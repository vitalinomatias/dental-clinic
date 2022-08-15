from rest_framework import viewsets
from rest_framework.views import Response

#models
from ..serializers.specialities import SpecialitiesSerializers, SpecialistSerializers

#serializers
from ..models.specialities import Speciality, Specialist

class SpecialityViewSet(viewsets.ModelViewSet):
    queryset = Speciality.objects.filter(status=True)
    serializer_class = SpecialitiesSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})
    
class SpecilistsViewSet(viewsets.ModelViewSet):
    queryset = Specialist.objects.filter(status=True)
    serializer_class = SpecialistSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})