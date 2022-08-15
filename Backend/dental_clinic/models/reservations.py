from django.db import models

#model
from .patients import Patient
from .specialities import Specialist

class Reservation(models.Model):
    date = models.DateField()
    time = models.TimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return f'{self.date_time} - {self.patient} - {self.specialist} '