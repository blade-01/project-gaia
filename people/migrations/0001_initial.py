# Generated by Django 3.0.2 on 2020-01-18 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Executive',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=5)),
                ('first_name', models.CharField(blank=True, max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, upload_to='images/')),
                ('position', models.CharField(max_length=200)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Lecturer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=5)),
                ('first_name', models.CharField(blank=True, max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, upload_to='images/')),
                ('courses', models.ManyToManyField(related_name='lecturers', to='courses.Course')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]