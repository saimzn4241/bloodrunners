from django.shortcuts import render
from models import Users
# import datetime
# Create your views here.

def addUser(request):
	print(request.GET)
	# x=str(request.GET['bday'])
	# x=x.split("-")
	# x=datetime.date(int(x[2]),int(x[0]),int(x[1]))
	user = Users(
		first_name=str(request.GET['first_name']),
		last_name=str(request.GET['last_name']),
		email=str(request.GET['email']),
		address=str(request.GET['address']),
		city=str(request.GET['city']),
		state=str(request.GET['state']),
		country=str(request.GET['country']),
		dob=str(request.GET['bday']),
		bg=str(request.GET['bg']),
		contact=int(request.GET['contact']))
	user.save()
	print (user.objects.all())
