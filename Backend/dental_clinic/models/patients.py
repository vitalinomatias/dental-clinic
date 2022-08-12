from datetime import datetime
from pyexpat import model
from django.db import models

class Patient(models.Model):
    cui = models.CharField(max_length=13)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    birthday = models.DateField(blank=True, null=True)
    age = models.CharField(max_length=3, blank=True, null=True)
    career = models.CharField(max_length=25, blank=True, null=True)
    year = models.DateField(blank=True, null=True)
    residence = models.CharField(max_length=30, blank=True, null=True)
    fono = models.CharField(max_length=50, blank=True, null=True)
    prevision = models.CharField(max_length=50, blank=True, null=True)
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    