# Generated by Django 4.0.6 on 2022-08-10 11:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CPLN', '0005_donation_person_product_productdonation_userpage_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='person',
            name='candidate',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userpage',
            name='person_id',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='CPLN.person'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='person',
            name='dni',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='email',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='telephone',
            field=models.IntegerField(max_length=20),
        ),
        migrations.AlterField(
            model_name='userpage',
            name='username',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('person_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.person')),
                ('role_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.role')),
            ],
        ),
        migrations.CreateModel(
            name='Direction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=50, null=True)),
                ('street_num', models.IntegerField(max_length=5, null=True)),
                ('neighborhood', models.CharField(max_length=50)),
                ('person_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.person')),
            ],
        ),
        migrations.CreateModel(
            name='CandidateToVolunteer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('person_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.person')),
                ('role_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.role')),
            ],
        ),
    ]
