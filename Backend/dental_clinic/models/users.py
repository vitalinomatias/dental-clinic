#django
from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser

from .specialities import Speciality

# Create your models here.

class User(AbstractUser):
    roles = (
        ('Especialista', 'Especialista'),
        ('Secretaria', 'Secretaria'),
        ('Asistente', 'Asistente'),
    )
    rol = models.CharField(max_length=50, choices=roles)
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE, blank=True, null=True)
    # speciality = models.CharField(max_length=50)
    
    REQUIRED_FIELDS = ['first_name', 'last_name', 'rol']
    
    # def __str__(self):
    #     return self.username
    
    def __str__(self):
        return f'{self.first_name} - {self.last_name}'
    
    # def get_short_name(self):
    #     return self.username
    
class Profile(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user
    
    