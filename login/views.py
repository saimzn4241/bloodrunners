from django.shortcuts import render
from models import Users,Hospitals
from django.http import JsonResponse


# Create your views here.
from django.http import HttpResponseRedirect, HttpResponse
import datetime
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def addUser(request):
	# print ("SEE THIS :-",str(request.POST.get('username')),"GOt NOTHING")
	# user = Users(first_name=str(request.POST.get('first_name')))
	# print user.first_name,user.username
	# user.username="dsfdf"
	# print user.first_name,user.username
	returnRespone = {}
	returnRespone['error'] = True
	# print(request.POST.get('flat'),request.POST.get('flong'),request.POST.get('dlat'),request.POST.get('dlong'))

	if request.method=='POST':
		returnRespone['email'] = ''
		returnRespone['username']=request.POST.get('username')
		returnRespone['error'] = False
		if(request.POST.get('type')=='donor'):
			print "Got the post req"
			print(request.POST.get('bday'))
			x=str(request.POST.get('bday'))
			x=x.split("-")
			print(x[0],x[1],x[2])
			#x=datetime.date(int(x[0]),int(x[1]),int(x[2]))
			x=datetime.date(int(x[2]),int(x[1]),int(x[0]))
			returnRespone['name']=str(request.POST.get('first_name'))+' '+str(request.POST.get('last_name'))
			returnRespone['email']=request.POST.get('email')
			user = Users(
				username=str(request.POST.get('username')),
				password=str(request.POST.get('password')),
				first_name=str(request.POST.get('first_name')),
				last_name=str(request.POST.get('last_name')),
				email=str(request.POST.get('email')),
				address=str(request.POST.get('address')),
				city=str(request.POST.get('city')),
				state=str(request.POST.get('state')),
				country=str(request.POST.get('country')),
				dob=x,
				gender=str(request.POST.get('gender')),
				bg=str(request.POST.get('bg')),
				contact=int(request.POST.get('contact')),
				badges=0)
			fixedLatitude=str(request.POST.get('flat'))
			fixedLongitude=str(request.POST.get('flong'))
			dynamicLatitude=str(request.POST.get('dlat'))
			dynamicLongitude=str(request.POST.get('dlong'))
			if(fixedLongitude!='' and fixedLatitude!=''):
				user.fix_lat=float(fixedLongitude)
				user.fix_long=float(fixedLatitude)
			if(dynamicLatitude!='' and dynamicLongitude!=''):
				user.cur_lat=float(dynamicLatitude)
				user.cur_long=float(dynamicLongitude)
			user.save()
		elif(request.POST.get('type')=='hospital'):
			returnRespone['name']=request.POST.get('hospitalName')
			user = Hospitals(
				hospitalName=str(request.POST.get('hospitalName')),
				username=str(request.POST.get('username')),
				password=str(request.POST.get('password')),
				cp1First_name=str(request.POST.get('cp1First_name')),
				cp1Last_name=str(request.POST.get('cp1Last_name')),
				cp1Contact=int(request.POST.get('cp1Contact')),
				street=str(request.POST.get('street')),
				city=str(request.POST.get('city')),
				state=str(request.POST.get('state')),
				country=str(request.POST.get('country'))
				)
			fn2=str(request.POST.get('cp2First_name'))
			ln2=str(request.POST.get('cp2Last_name'))
			c2=str(request.POST.get('cp2Contact'))
			if(fn2!="" and ln2!="" and c2!=""):
				user.cp2First_name=str(request.POST.get('cp2First_name'))
				user.cp2Last_name=str(request.POST.get('cp2Last_name'))
				user.cp2Contact=int(request.POST.get('cp2Contact'))
			fn2=str(request.POST.get('cp3First_name'))
			ln2=str(request.POST.get('cp3Last_name'))
			c2=str(request.POST.get('cp3Contact'))
			if(fn2!="" and ln2!="" and c2!=""):
				user.cp3First_name=str(request.POST.get('cp3First_name'))
				user.cp3Last_name=str(request.POST.get('cp3Last_name'))
				user.cp3Contact=int(request.POST.get('cp3Contact'))
			user.save()
		return JsonResponse(returnRespone)
	else :
		return JsonResponse(returnRespone)

# @csrf_exempt
# def login_old(request):
# 	print(request.POST.get('username'))
# 	username=str(request.POST.get('username'))
# 	password=str(request.POST.get('password'))
	
# 	if(Users.objects.filter(password=password, username=username).exists()):
# 		request.session['username'] = username
# 		name=request.session['username']
# 		return render(request, 'loggedin.html', {"username" : name})
# 	else:
# 		return HttpResponse("incorrect data")	


@csrf_exempt
def login(request):
	print(request)
	print(request.POST.get('username'))
	print(request.POST.get('password'))
	username=str(request.POST.get('username'))
	password=str(request.POST.get('password'))
	dataToBeSend = {}
	dataToBeSend['login_value'] = 'not ok'
	dataToBeSend['error'] = True
	if(Users.objects.filter(password=password, username=username).exists()):
		request.session['username'] = username
		name=request.session['username']
		user=(Users.objects.get(username=username))
		
		print request.session._session_key
		print request.session
		print request.session.items()


		dataToBeSend['uid'] = str(user.id)
		dataToBeSend['login_value'] = 'ok'
		dataToBeSend['email'] = str(user.email)
		dataToBeSend['user'] = str(username)
		dataToBeSend['error'] = False
		print (JsonResponse(dataToBeSend))
		return JsonResponse(dataToBeSend)

	elif(Hospitals.objects.filter(password=password, username=username).exists()):
		request.session['username'] = username
		name=request.session['username']
		user=(Hospitals.objects.get(username=username))
		
		print request.session._session_key
		print request.session
		print request.session.items()


		dataToBeSend['uid'] = str(user.id)
		dataToBeSend['login_value'] = 'ok'
		#dataToBeSend['email'] = str(user.email)
		dataToBeSend['user'] = str(username)
		dataToBeSend['error'] = False
		print (JsonResponse(dataToBeSend))
		return JsonResponse(dataToBeSend)	
	else:
		print (JsonResponse(dataToBeSend))
		return JsonResponse(dataToBeSend)

	# m=Users.objects.filter(password=request.POST.get('password'), username=request.POST.get('username'))
	# if(m.exists()):
	# 	request.session['username'] = m.username
 #        #return HttpResponse("You're logged in.")
	# 	return JsonResponse({'login_value':'ok'})

	# else:
 #        #return HttpResponse("Your username and password didn't match.")
	# 	return JsonResponse({'login_value':'not ok'})



@csrf_exempt
def logout(request):
   try:
      #del request.session[request.POST.get('username')]
      del request.session['username']
      
      print request.session.items()
      return JsonResponse({'logout_value':'ok'})
   except:
     #return render(request, 'home.html')
   		return HttpResponse("cant log out.")
   
@csrf_exempt
def profile(request):
	return render(request, 'profile.html')

#@csrf_exempt
def req(request):
	return JsonResponse({'foo':'bar'})


def checkSession(request):
	dataToBeSend = {}
	if(request.session.items()):
		dataToBeSend['type']="login"
		
		for i in request.session.items():
			dataToBeSend['username']=i[1]
			#username=i[1]

		print (dataToBeSend['type'])
		print (dataToBeSend['username'])
		
		return JsonResponse(dataToBeSend)

		# print "YES"
		# return HttpResponse("YES")
	
	else:
		dataToBeSend['type']="initial"
		dataToBeSend['username']=""
		print (dataToBeSend['type'])
		print (dataToBeSend['username'])
		return JsonResponse(dataToBeSend)
		
		# print "no"	
		# return HttpResponse("no")

	

	
		

# def login1(request):
#    username = 'not logged in'
   
#    if request.method == 'POST':
#       MyLoginForm = LoginForm(request.POST)
      
#       if MyLoginForm.is_valid():
#          username = MyLoginForm.cleaned_data['username']
#          request.session['username'] = username
#       else:
#          MyLoginForm = LoginForm()
			
#    return render(request, 'loggedin.html', {"username" : username})

# def formView(request):
#    if request.session.has_key('username'):
#       username = request.session['username']
#       return render(request, 'loggedin.html', {"username" : username})
#    else:
#       return render(request, 'login.html', {}) 
      


