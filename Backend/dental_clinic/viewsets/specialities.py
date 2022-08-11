from rest_framework import viewsets

from ..serializers.specialities import SpecialitiesSerializers

from ..models.specialities import Speciality

class SpecialityViewSet(viewsets.ModelViewSet):
    queryset = Speciality.objects.all()
    serializer_class = SpecialitiesSerializers