from rest_framework import viewsets
from rest_framework.views import Response
from datetime import date, datetime, timedelta

#model
from ..models.appointment import Appointment

from ..models.reservations import Reservation

from ..serializers.reservations import ReservationSerializers



class PeopleByDates(viewsets.ModelViewSet):
    
    def list(self, request, *args, **kwargs):
        
        start_date = self.request.query_params.get('start')
        end_date = self.request.query_params.get('end')
        
        # end_date = date(2022, 8, 26)
        
        # new_end = end_date + timedelta(days=1)
        
        
        
        result = Reservation.objects.filter(date_time__range=[start_date, end_date])

        print(start_date)
        print(end_date)
        print(vars(result.model))
        
        serializer = ReservationSerializers(result, many=True)
        
        data = serializer.data
        
        
        return Response({'status': True, 'message': 'Exito', 'data': data})