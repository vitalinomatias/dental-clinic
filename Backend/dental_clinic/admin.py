from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.

from .models.users import User, Profile

class CustomUserAdmin(UserAdmin):
    list_display =('username', 'is_active','first_name', 'last_name', 'is_staff', 'rol', 'is_administrator', 'is_specialist', 'is_secretary', 'is_asistent', )
    list_filter = ('is_staff', 'rol', 'is_administrator', 'is_specialist', 'is_secretary', 'is_asistent',)
    
    
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)
    search_fields = ('user__username', 'user__first_name', 'user__last_name')
    
admin.site.register(User, CustomUserAdmin)
