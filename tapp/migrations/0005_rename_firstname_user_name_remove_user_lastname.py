# Generated by Django 4.0.4 on 2022-05-24 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tapp', '0004_bot'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='firstname',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='lastname',
        ),
    ]
