from rest_framework import viewsets

#model
from ..models.reservations import Reservation

#serializer
from ..serializers.reservations import ReservationSerializers

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializers