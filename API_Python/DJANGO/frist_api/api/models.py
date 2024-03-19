from django.db import models

# Create your models here.
class User(models.Model):
    userId = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=50)
    userAge=models.IntegerField()
    about=models.TextField()
    work=models.TextField(max_lenth=50)
    gender=models.CharField(max_length=50, choices=(
        ('male', 'male'), ('female', 'female'), ('other', 'other')
    ))

