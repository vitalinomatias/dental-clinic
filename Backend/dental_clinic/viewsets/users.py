from rest_framework import viewsets
from rest_framework.views import Response


from ..serializers.users import UserSerializers

from ..models.users import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(status=True)
    serializer_class = UserSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})