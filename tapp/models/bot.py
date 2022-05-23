from django.db import models


class Bot(models.Model):
    question = models.TextField(blank=True,null=True)
    answer = models.TextField(blank=True, null=True)