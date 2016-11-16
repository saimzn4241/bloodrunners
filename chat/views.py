from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.http import HttpResponseRedirect, HttpResponse
from login.models import *
from geopy.distance import vincenty

# Create your views here.

# To make the function work for email just change the username field to email
# It will take 'hospital' as a parameter for email or username
# To see the format of the data recieved run the command given below from terminal
# 'curl --data 'hospital={username or email without brackets}' http://localhost:8000/getNearUsers/'
# Also you need to run 'pip install geopy' and please remove the unnecessary commands after reading them :p
@csrf_exempt
def nearUsers(request):
	maximum_distance=2871622
	userListToBeReturned = {'count':0}
	if request.method=='POST':
		blood_required_at_hospital_data = {}
		blood_required_at_hospital_data['username']=str(request.POST.get('hospital'))
		# print str(request.POST.get('hospital'))
		# print str(request.POST.get('hospital')),"df"
		if(Hospitals.objects.filter(username=blood_required_at_hospital_data['username']).exists()):
			hospital=Hospitals.objects.filter(username=blood_required_at_hospital_data['username'])
			blood_required_at_hospital_data['lat']=hospital[0].fix_lat
			blood_required_at_hospital_data['long']=hospital[0].fix_long

			allUsers=Users.objects.all()
			hosp = (blood_required_at_hospital_data['lat'],blood_required_at_hospital_data['long'])
			for i in allUsers:
				user = (i.cur_lat,i.cur_long)
				if((vincenty(user,hosp).miles)<=maximum_distance):
					if(userListToBeReturned['count']==0):
						userListToBeReturned['users']=[]
					userListToBeReturned['count']+=1
					userListToBeReturned['users'].append(i.username)
	return JsonResponse(userListToBeReturned)
