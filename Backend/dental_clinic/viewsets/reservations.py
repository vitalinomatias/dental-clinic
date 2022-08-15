from rest_framework import viewsets
from rest_framework.views import Response

#model
from ..models.reservations import Reservation

#serializer
from ..serializers.reservations import ReservationSerializers

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.filter(status=True)
    serializer_class = ReservationSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})