import React from "react"
import { render } from "react-dom"
//import Loc_changeContainer from "./containers/ProfileContainer"
var odlat=0;
var odlong=0;	

class Loc_change extends React.Component {

	constructor(props) {
    super(props);

	    this.state = {
	    	
	    	dlat:0,
			dlong:0,
	    }
  	}

	componentDidMount(){

		this.loc();
	}
	sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}

	loc(){
		//while(1){
		var that=this;
		//for(var i=0;i<10;i++){
		//this.sleep(2000*i)	
		setTimeout(() => {
						
					
			navigator.geolocation.getCurrentPosition(function(location) {
		        // console.log("==========");
		         console.log("lat=",location.coords.latitude);
		         console.log("long=", location.coords.longitude);
		        // console.log(location.coords.accuracy);
		        if(odlat!=location.coords.latitude || odlong!=location.coords.longitude){
			        odlat=location.coords.latitude;
			        odlong=location.coords.longitude;

			        that.setState({
			        	dlat:location.coords.latitude,
			        	dlong:location.coords.longitude
			        });
			        
		    	}
		    }.bind(this))
		}, 2000) 
	   //}
	}

	render() {
		return (
			<div>  
			<h1>Loc_change</h1>
			<h1>{this.state.dlat}</h1>
			<h1>{this.state.dlong}</h1>
			
			</div>
		);
	}
}

render(<Loc_change/>, document.getElementById('Loc_change'))