from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.

from .models.users import User, Profile

class CustomUserAdmin(UserAdmin):
    list_display =('username', 'first_name', 'last_name', 'is_staff', 'rol', 'speciality', )
    
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)
    
admin.site.register(User, CustomUserAdmin)