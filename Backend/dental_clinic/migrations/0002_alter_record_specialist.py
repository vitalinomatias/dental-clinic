# Generated by Django 3.2.15 on 2022-08-20 13:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dental_clinic', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='specialist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='dental_clinic.specialist'),
        ),
    ]
