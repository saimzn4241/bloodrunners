from django.shortcuts import render
from models import Users
from django.http import HttpResponseRedirect, HttpResponse
import datetime
# Create your views here.

def addUser(request):
	print(request.GET['bg'])
	x=str(request.GET['bday'])
	x=x.split("-")
	print(x[2],x[0],x[2])
	x=datetime.date(int(x[2]),int(x[1]),int(x[0]))
	user = Users(
		first_name=str(request.GET['first_name']),
		last_name=str(request.GET['last_name']),
		email=str(request.GET['email']),
		address=str(request.GET['address']),
		city=str(request.GET['city']),
		state=str(request.GET['state']),
		country=str(request.GET['country']),
		bg=str(request.GET['bg']),
		dob=x,
		contact=int(request.GET['contact']))
	user.save()
	return HttpResponse("Nice")