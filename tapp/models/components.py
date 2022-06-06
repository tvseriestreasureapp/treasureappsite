from django.db import models
from gdstorage.storage import GoogleDriveStorage

# Define Google Drive Storage
gd_storage = GoogleDriveStorage()

class BTS(models.Model):
    file = models.FileField(upload_to='bts/',storage=gd_storage,blank=True,null=True)

class Collab(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='collabs/',storage=gd_storage,blank=True,null=True)
    description = models.CharField(max_length=1000, null=False, blank=False,default="")


class Art(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='arts/',storage=gd_storage,blank=True,null=True)

class Event(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='events/',storage=gd_storage,blank=True,null=True)

class Actor(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='actor/',storage=gd_storage,blank=True,null=True)
    summary = models.CharField(max_length=800, null=False, blank=False,default="")


class Soundtrack(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True, default="")
    picture = models.ImageField(upload_to='soundtrack/',storage=gd_storage,blank=True,null=True)
    file = models.FileField(upload_to='soundtrack/music/',storage=gd_storage,blank=True,null=True)

class Poster(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True, default="")
    picture = models.FileField(upload_to='poster/',storage=gd_storage,blank=True,null=True)
