from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Users(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=40)
	email = models.EmailField()
 	address = models.CharField(max_length=50)
	city = models.CharField(max_length=60)
	state_province = models.CharField(max_length=30)
	country = models.CharField(max_length=50)
	bg = models.CharField(max_length=2)
	badges = models.IntegerField(default=0)
	dob = models.DateField()
	contact = models.IntegerField(max_length=10)
	age = models.IntegerField() 
	def __init__(self, dob, *args, **kwargs):
        super(models.Model, self).__init__(self, *args, **kwargs)
        today = date.today()
        self.age = today.year - dob.year
	    if today.month < dob.month or today.month == dob.month and today.day < dob.day:
	        self.age -= 1