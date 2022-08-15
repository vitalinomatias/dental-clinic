from django.db import models

from dental_clinic.models.records import Record

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
    statusAttendance = models.CharField(max_length=5, choices=attendance)
    date = models.DateField()
    
    def __str__(self):
        return f'{self.record} - {self.date}'
