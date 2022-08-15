from django.db import models


#models
from .patients import Patient
from .specialities import Specialist


class Record(models.Model):
    patient  = models.OneToOneField(Patient, on_delete=models.CASCADE)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.patient}'
    