#django
from django.db import models

#model
from ..models.users import User


# Create your models here.

class Speciality(models.Model):
    name = models.CharField(max_length=50)
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name

class Specialist(models.Model):
    name = models.OneToOneField(User, on_delete=models.CASCADE)
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE)
    status = models.BooleanField()
    
    def __str__(self):
        return f'{self.name}'
    