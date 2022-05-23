from django.contrib import admin
from tapp.models.user import User
from tapp.models.components import Actor,Art,BTS,Collab,Event
from tapp.models.bot import Bot

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('id','firstname', 'lastname','email','password')

class BTSAdmin(admin.ModelAdmin):
    list_display = ('id','file')

class CollabAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture')

class ArtAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture')

class EventAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture')

class ActorAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture')


class BotAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'answer')


admin.site.register(User,UserAdmin)
admin.site.register(BTS,BTSAdmin)
admin.site.register(Collab,CollabAdmin)
admin.site.register(Art,ArtAdmin)
admin.site.register(Event,EventAdmin)
admin.site.register(Actor,ActorAdmin)
admin.site.register(Bot,BotAdmin)