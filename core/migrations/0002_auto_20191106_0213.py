# Generated by Django 2.2.7 on 2019-11-06 02:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='datasets',
            name='mean1',
        ),
        migrations.RemoveField(
            model_name='datasets',
            name='mean2',
        ),
        migrations.RemoveField(
            model_name='datasets',
            name='n1',
        ),
        migrations.RemoveField(
            model_name='datasets',
            name='n2',
        ),
        migrations.RemoveField(
            model_name='datasets',
            name='sd1',
        ),
        migrations.RemoveField(
            model_name='datasets',
            name='sd2',
        ),
    ]