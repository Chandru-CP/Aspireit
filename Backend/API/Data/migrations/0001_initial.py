# Generated by Django 4.2.11 on 2024-04-18 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('interview_experience', models.CharField(db_column='interview_experience', max_length=100)),
                ('position', models.CharField(max_length=100)),
                ('question_text', models.TextField()),
                ('about', models.TextField()),
                ('overall_difficulty', models.IntegerField(default=1)),
            ],
        ),
    ]