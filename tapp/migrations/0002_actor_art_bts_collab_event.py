# Generated by Django 4.0.4 on 2022-04-26 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='actor/')),
            ],
        ),
        migrations.CreateModel(
            name='Art',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='arts/')),
            ],
        ),
        migrations.CreateModel(
            name='BTS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to='bts/')),
            ],
        ),
        migrations.CreateModel(
            name='Collab',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='collabs/')),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='events/')),
            ],
        ),
    ]