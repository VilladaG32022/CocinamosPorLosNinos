# Generated by Django 4.0.6 on 2022-08-15 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CPLN', '0007_alter_person_candidate'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='password',
            field=models.CharField(default='password', max_length=20),
        ),
    ]
