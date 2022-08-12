from django.db import models

#model
from .patients import Patient
from .users import User

class Reservation(models.Model):
    date_time = models.DateTimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    specialist = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.date_time} - {self.patient} - {self.specialist} '