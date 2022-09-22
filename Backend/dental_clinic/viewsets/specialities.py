from rest_framework import viewsets
from rest_framework.views import Response
from rest_framework.permissions import IsAuthenticated

from ..serializers.users import UserSerializers

from ..models.users import User

#models
from ..serializers.specialities import SpecialitiesSerializers, SpecialistSerializers

#serializers
from ..models.specialities import Speciality, Specialist

class SpecialityViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)  
    queryset = Speciality.objects.filter(status=True)
    serializer_class = SpecialitiesSerializers
    
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
    
class SpecilistsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)  
    queryset = Specialist.objects.filter(status=True)
    serializer_class = SpecialistSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})
        
class UserSpecialist(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)  
    # queryset = User.objects.filter(rol='Especialista').filter(status=True)
    # serializer_class = UserSerializers
    def list(self, request, *args, **kwargs):
        queryset = User.objects.filter(rol='Especialista').filter(status=True)
        result = UserSerializers(queryset, many=True)
        
        
        return Response({'status': True, 'message': 'Exito', 'data': result.data})