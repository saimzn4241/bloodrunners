import React from "react"
import { render } from "react-dom"
import axios from 'axios'
import firebase from 'firebase'
import MapUserHosp from './MapUserHosp'
export default class LetsWaitContainer extends React.Component {

	constructor(props){
		super(props);
		this.state={
			username : '',
			userType : '',
			accepted : 'none',
			waitingFor : '',
			userAccepted : '',
			userlat: '',
			userlong: '',
			userDist: '',
			userTime: '',
			type: 1,
			hosplat: '',
			hosplong: '',
		};
	}

	componentWillMount(){
		axios.get('/checkSession/').then(function(result) {    
              var userType=result.data.userType;
              var username=result.data.username;
              // console.log("LetsWait - "+username);
              // console.log("LetsWait - "+userType);
              this.setState({
              	username: username, 
              	userType:userType
              },function check(){
	              	var url = window.location.href;
					var n = url.indexOf('=');
					// console.log(n);
					var username = "";
					for(var i = n+1 ;i<url.length;i++)
					{
						username=username+url[i];
					}
					// console.log(username);
					this.setState({
						waitingFor: username
					},function notif(){
						if(this.state.userType=='donor')
						{
							this.getHospitalLocationAndCheckNotification(this.state.waitingFor);
						}
						else if(this.state.userType=='hospital')
						{
							this.getHospitalLocationAndCheckNotification(this.state.username);
						}
						// this.checkNotification();
					}.bind(this));
		        });
        }.bind(this));

		
	}

	getHospitalLocationAndCheckNotification(hospital){

		var qs = require('qs');
	    axios.post('/ret_hosp_loc/' ,qs.stringify({username: hospital})).then(function (response) {
	        console.log(response);
	        if(response.data.error=="false"){

	            this.setState({
	            	hosplat: response.data.lat,
	            	hosplong:  response.data.long,
	            });
	        }
	        else{
	            console.log("error=true");
	        }
	        this.checkNotification(); 
	    }.bind(this)).catch(function (error) {
	      console.log(error);
	    });

	}

	checkNotification(){
		// console.log("inside");
		// console.log(this.state.userType);
		if(this.state.userType=='donor')
		{
			// console.log(this.state.userType);
			var url = ('hospitalAccepted/').concat(this.state.username);
			const rootRef= firebase.database().ref().child(url);

			rootRef.on('value', function(snapshot){
                console.log(snapshot.val());
                var objectReturned=snapshot.val();
                var status='';
                for(var key in objectReturned){
                	if(objectReturned[key].hospUsername==this.state.waitingFor && status=='')
                	{
                		status = objectReturned[key].status;
                	}
                }
                // rootRef.off();
            	this.setState({
              		userAccepted: status
            	});     
            }.bind(this));
		}
		else if(this.state.userType=='hospital')
		{
			// console.log(this.state.userType);
			var url = ('location/').concat(this.state.waitingFor);
			// console.log(url);
			const rootRef= firebase.database().ref().child(url);
			rootRef.on('value', function(snapshot){
                console.log(snapshot.val());
                var objectReturned=snapshot.val();
                var latitude = objectReturned.latitude;
                var longitude = objectReturned.longitude;
                
            	this.setState({
              		userlat: latitude,
              		userlong: longitude,
              		userDist: objectReturned.distance,
              		userTime: objectReturned.time,
            	});     
            }.bind(this));
		}
	}

	loc3(){
		var url = 'location/'+ this.state.username;
		console.log(url);
	    const rootRef= firebase.database().ref().child(url);
	    navigator.geolocation.getCurrentPosition(function(location) {
	      console.log("inside=>",location);

	      if(this.state.userlat!=location.coords.latitude || this.state.userlong!=location.coords.longitude){
	            var key="&key=AIzaSyBChu-qFYq9rJpaGOZcatYv_tbuTAu42Gw";
			    var url1="https://maps.googleapis.com/maps/api/distancematrix/json?units=metric";
			    var origin="&origins=";
			    console.log("here in distance");
			    origin=origin.concat(location.coords.latitude).concat(",").concat(location.coords.longitude)
			    var destination="&destinations=".concat(this.state.hosplat).concat(",").concat(this.state.hosplong)
			    url1=url1.concat(origin).concat(destination).concat(key)
	            var qs = require('qs');
	            console.log(url1);
	            console.log("hospital : ",this.state.hosplat,this.state.hosplong)
			    axios.post("/FrontendDistance/",qs.stringify({url: url1})).then(function (response) {
			        console.log(response);
			        
			        var dist=response.data.distance;
			        var time=response.data.time;
			        console.log("loc3/axios/FrontendDistance : ",dist,time)
			        this.setState({
			        	userlat: location.coords.latitude,
	                	userlong: location.coords.longitude,
			            userDist: response.data.distance,
			            userTime: response.data.time,
			        },function(){
			        	console.log("loc3/axios/FrontendDistance : ",this.state.userlat,this.state.userlong)
			        });
			        rootRef.set({
	                	latitude: location.coords.latitude,
	                	longitude: location.coords.longitude,
	                	distance : dist,
	                	time: time
	            	});
			        	console.log("loc3/axios/FrontendDistance : ","location on firebase updated")

			    }.bind(this));
	        }
	    }.bind(this))
	    
	    console.log("loc3/just : ",this.state.userlat, this.state.userlong);
	    this.setState({
	                type:1
	         });
  	}

	render(){
		if(this.state.userType=='donor')
		{
			if(this.state.userAccepted=='')
			{
				return(
					<div>
						<h3>Hello {this.state.username}, waiting for the hospital response!!</h3>
					</div>
				);
			}
			else if(this.state.userAccepted=='true')
			{
				//PAnndu maps
				return(
					<div>
						<h1>Here is your location and the hospital location </h1>
						{this.state.waitingFor!=''&& this.state.userlat!='' && this.state.userlong!=''?
						<MapUserHosp userType={this.state.userType} username={this.state.username} waitingFor={this.state.waitingFor} userlat={this.state.userlat} userlong={this.state.userlong} userDist={this.state.userDist} userTime={this.state.userTime} hosplat={this.state.hosplat} hosplong={this.state.hosplong} />:<h1></h1>
						}	
						{
					        setTimeout(() => {
					          this.loc3()     
					        }, 10000)
					    }
					</div>
				);
			}
			else
			{
				return(
					<div>
						<h2 align="center">Thanks for helping...!!</h2>
						<div>
							<form method="get" action="/home">
			                	<button type="submit">HOME</button>
			                </form>
						</div>
					</div>
				);
			}
		}
		else if(this.state.userType=='hospital')
		{
			if(this.state.userlat=='' || this.state.userlong=='')
			{
				return(
					<div>
						<h3>Waiting for the user location..!!</h3>
					</div>
				);
			}
			else
			{
				//Pandu maps
				return(
					<div>
						<MapUserHosp userType={this.state.userType} username={this.state.username} waitingFor={this.state.waitingFor} userlat={this.state.userlat} userlong={this.state.userlong} userDist={this.state.userDist} userTime={this.state.userTime} hosplat={this.state.hosplat} hosplong={this.state.hosplong} />
						<p>{this.state.userlat} ... {this.state.userlong}</p>
					</div>
				);
			}
		}
		else
		{
			return(
				<div>
					<h2 align="center">You are not logged in Go to home to login first...!!</h2>
						<div>
							<form method="get" action="/home">
			                	<button type="submit">HOME</button>
			                </form>
						</div>
				</div>
			);	
		}
	}
}