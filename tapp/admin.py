from django.contrib import admin
from tapp.models.user import User

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('id','firstname', 'lastname','email','password')