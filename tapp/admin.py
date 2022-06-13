from django.contrib import admin
from tapp.models.user import User
from tapp.models.components import Actor,Art,BTS,Collab,Event, Poster, Soundtrack
from tapp.models.bot import Bot

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('id','name','email','password')

class BTSAdmin(admin.ModelAdmin):
    list_display = ('id','file')

class CollabAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture','description')

class ArtAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture')

class EventAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture')

class ActorAdmin(admin.ModelAdmin):
    list_display = ('id','name','picture','summary')


class BotAdmin(admin.ModelAdmin):
    list_display = ('id', 'questions', 'answers')

class SoundtrackAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'picture','file')

class PosterAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'picture')


admin.site.register(User,UserAdmin)
admin.site.register(BTS,BTSAdmin)
admin.site.register(Collab,CollabAdmin)
admin.site.register(Art,ArtAdmin)
admin.site.register(Event,EventAdmin)
admin.site.register(Actor,ActorAdmin)
admin.site.register(Bot,BotAdmin)
admin.site.register(Soundtrack,SoundtrackAdmin)
admin.site.register(Poster,PosterAdmin)