from rest_framework import viewsets

#serializer
from ..serializers.patients import PatientSerializers

#model
from  ..models.patients import Patient

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializers