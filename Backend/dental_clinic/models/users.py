#django
from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    roles = (
        ('Administrador', 'Administrador'),
        ('Especialista', 'Especialista'),
        ('Secretaria', 'Secretaria'),
        ('Asistente', 'Asistente'),
    )
    rol = models.CharField(max_length=50, choices=roles)
    status = models.BooleanField(default=True)
    
    REQUIRED_FIELDS = ['first_name', 'last_name', 'rol']
    
    def __str__(self):
        return f'{self.first_name} - {self.last_name} - {self.rol}'
    
class Profile(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user
    
    