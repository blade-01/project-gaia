# Generated by Django 3.0.2 on 2020-03-24 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_auto_20200315_2157'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='organisers',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
