from django.db import models

class Data(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    interview_experience = models.CharField(max_length=100, db_column='interview_experience')
    position = models.CharField(max_length=100)
    question_text = models.TextField()
    about = models.TextField()
    overall_difficulty = models.IntegerField(default=10)

    def __str__(self):
        return self.name
