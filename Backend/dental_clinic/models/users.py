#django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


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
    
    is_administrator = models.BooleanField(
        'administrator',
        default=False
    )
    
    is_specialist = models.BooleanField(
        'specialist',
        default=False
    )
                                
    is_secretary = models.BooleanField(
        'secretary',
        default=False,
    )
    
    is_asistent = models.BooleanField(
        'asistent',
        default=False,
    )
    
    def __str__(self):
        # return f'{self.first_name} - {self.last_name} - {self.rol}'
        return self.username

    def get_short_name(self):
        return self.username
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.user)
