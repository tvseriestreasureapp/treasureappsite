# Generated by Django 4.0.4 on 2022-06-13 15:40

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tapp', '0006_poster_soundtrack_actor_summary_collab_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bot',
            name='answer',
        ),
        migrations.RemoveField(
            model_name='bot',
            name='question',
        ),
        migrations.AddField(
            model_name='bot',
            name='answers',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), default=list, size=None),
        ),
        migrations.AddField(
            model_name='bot',
            name='questions',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), default=list, size=None),
        ),
    ]
