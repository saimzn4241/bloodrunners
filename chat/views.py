from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.http import HttpResponseRedirect, HttpResponse
from login.models import *
from geopy.distance import vincenty
from urllib2 import urlopen
import json



# Create your views here.

# To make the function work for email just change the username field to email
# It will take 'hospital' as a parameter for email or username
# To see the format of the data recieved run the command given below from terminal
# 'curl --data 'hospital={username or email without brackets}' http://localhost:8000/getNearUsers/'
# Also you need to run 'pip install geopy' and please remove the unnecessary commands after reading them :p


def road_distance(hosp, allusers):
	userListToBeReturned = {'count':0}
	maximum_distance=2871622

	key="&key=AIzaSyCxLotVeAyJaSZJwnoYmYmTRDTiIDriJ0M"
	url="https://maps.googleapis.com/maps/api/distancematrix/json?units=metric"
	origin="&origins="
	
	for i in allusers:
		origin=origin+str(i.cur_long)+","+str(i.cur_lat)+"|"
	
	origin = origin[:-1]	
	
	destination="&destinations="+str(hosp[1])+","+(str(hosp[0]))
	
	url=url+origin+destination+key
	
	response = urlopen(url).read()
	response=json.loads(response)

	c=-1
	for i in allusers:
		c+=1
		if(response['rows'][c]['elements'][0]['status']!="ZERO_RESULTS"):
			dist=int(response['rows'][c]['elements'][0]['distance']['value'])
			time=int(response['rows'][c]['elements'][0]['duration']['value'])
			
			if(dist<=maximum_distance):
					if(userListToBeReturned['count']==0):
						userListToBeReturned['users']=[]
						userListToBeReturned['dist']=[]
						userListToBeReturned['time']=[]
					
					userListToBeReturned['count']+=1
					userListToBeReturned['users'].append(i.username)
					userListToBeReturned['dist'].append(dist)
					userListToBeReturned['time'].append(time)
	print userListToBeReturned	
	return (userListToBeReturned)				






@csrf_exempt
def nearUsers(request):
	maximum_distance=2871622
	userListToBeReturned = {'count':0}
	if request.method=='POST':
		blood_required_at_hospital_data = {}
		blood_required_at_hospital_data['username']=str(request.POST.get('hospital'))
		if(Hospitals.objects.filter(username=blood_required_at_hospital_data['username']).exists()):
			hospital=Hospitals.objects.filter(username=blood_required_at_hospital_data['username'])
			blood_required_at_hospital_data['lat']=hospital[0].fix_lat
			blood_required_at_hospital_data['long']=hospital[0].fix_long

			allUsers=Users.objects.all()
			hosp = (blood_required_at_hospital_data['lat'],blood_required_at_hospital_data['long'])
			return JsonResponse(road_distance(hosp, allUsers))
			
						
				
	