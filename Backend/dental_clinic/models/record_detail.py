from django.db import models

#models
from .records import Record
from .appointment import Appointment
from .pieces import Piece
from .areas import Area


class RecordDetail(models.Model):
    record = models.ForeignKey(Record, on_delete=models.CASCADE)
    # appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE, null=True, blank=True)
    piece = models.ForeignKey(Piece, on_delete=models.CASCADE)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    diagnosis = models.CharField(max_length=500)
    treatment = models.CharField(max_length=500)
    date = models.DateField()
    cost = models.FloatField()
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return self.record
    
    