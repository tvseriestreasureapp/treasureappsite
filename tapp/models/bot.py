from django.db import models
from django.contrib.postgres.fields import ArrayField

class Bot(models.Model):
    questions = ArrayField(models.CharField(max_length=1000, blank=True,null=True), default=list)
    answers = ArrayField(models.CharField(max_length=1000, blank=True,null=True), default=list)