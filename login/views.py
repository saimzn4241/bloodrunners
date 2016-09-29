from django.shortcuts import render
from models import Users
import datetime
# Create your views here.
from django.http import HttpResponseRedirect, HttpResponse


from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def addUser(request):
	if request.method == 'POST':
		print(request.POST)
		x=str(request.POST.get('bday'))
		x=x.split("-")
		print x
		x=datetime.date(int(x[0]),int(x[1]),int(x[2])) 
		
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
			bg=str(request.POST.get('bg')),
			contact=int(request.POST.get('contact')))
		user.save()
		#print (user.objects.all())
		return HttpResponse("got")


@csrf_exempt
def login(request):
	print(request.POST)
	username=str(request.POST.get('username'))
	password=str(request.POST.get('password'))
	
	if(Users.objects.filter(password=password, username=username).exists()):
		request.session['username'] = username
		name=request.session['username']
		return render(request, 'loggedin.html', {"username" : name})
	else:
		return HttpResponse("incorrect data")	

@csrf_exempt
def logout(request):
   try:
      del request.session['username']
   except:
      pass
   return render(request, 'home.html')



		

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
      
# def logout(request):
#    try:
#       del request.session['username']
#    except:
#       pass
#    return HttpResponse("<strong>You are logged out.</strong>")        	

	
