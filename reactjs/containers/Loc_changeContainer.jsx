import axios from 'axios'
import firebase from 'firebase'
import React from "react"
import { render } from "react-dom"
//import Loc_changeContainer from "./containers/ProfileContainer"

   
var odlat=0;
var odlong=0; 
var f=0;
var id, target, options;
target = {
      latitude : 0,
      longitude: 0
};

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


export default class Loc_change extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        type:0,
        dlat:0,
      dlong:0,
      }
    }

  
  componentDidMount(){

    this.loc3()
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  success(pos) {
  console.log("in success");
    var crd = pos.coords;

    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
      console.log('Congratulations, you reached the target');
      navigator.geolocation.clearWatch(id);
    }
  }

  error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

    

    
  loc1(){
    
    var that=this;
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
        })
  }

  loc(){
    //while(1){
    var that=this;
    for(var i=0;i<10;i++){
      
    
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
    }, 2000*(i^6)) 
    
  
     }
  }
  loc3(){
    const rootRef= firebase.database().ref().child('location/user');

    //this.sleep(20000)
    var that=this
    
    navigator.geolocation.getCurrentPosition(function(location) {
      console.log("inside=>",location);

      if(odlat!=location.coords.latitude || odlong!=location.coords.longitude){
              odlat=location.coords.latitude;
              odlong=location.coords.longitude;

  
                console.log("here is change in firebase")

                rootRef.set({
                latitude: odlat,
                longitude: odlong
                });


              that.setState({
                dlat:location.coords.latitude,
                dlong:location.coords.longitude
              });

               // const rootRef1 = rootRef.push();
                
              
          }

    })
    
    console.log(odlat, odlong)
    that.setState({
                type:1
              });
    
           
  }

  render() {
    return (
      <div>  
      <h1>Loc_change</h1>
      <h1>{this.state.dlat}</h1>
      <h1>{this.state.dlong}</h1>
      
      {
        setTimeout(() => {
          this.loc3()     
        }, 10000)
      }
      
      </div>
    );
  }
}
