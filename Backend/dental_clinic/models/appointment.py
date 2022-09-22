from django.db import models

from .records import Record
from .specialities import Specialist

class Appointment(models.Model):
    attendance = (
        (0, 'No asistio'),
        (1, 'Asistio'),
        (2, 'Tarde')
    )
    record = models.ForeignKey(Record, on_delete=models.CASCADE)
    observation = models.CharField(max_length=200, blank=True, null=True)
    type_service = models.BooleanField() #True= Tratamiento, False=Urgencia
    indication = models.CharField(max_length=200, blank=True, null=True)
    statusTicket = models.BooleanField() #True= pagado, False=No pagado
    statusAttendance = models.CharField(max_length=5, choices=attendance) # 0=no asistio, 1=asistio, 2=asisitio tarde
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    
    def __str__(self):
        return f'{self.record} - {self.date}'
