from django.db import models

class BTS(models.Model):
    file = models.FileField(upload_to='bts/',blank=True,null=True)

class Collab(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='collabs/',blank=True,null=True)

class Art(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='arts/',blank=True,null=True)

class Event(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='events/',blank=True,null=True)

class Actor(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False,default="")
    picture = models.ImageField(upload_to='actor/',blank=True,null=True)