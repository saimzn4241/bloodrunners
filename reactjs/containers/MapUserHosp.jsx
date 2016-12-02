import Headline from "../components/Headline"
import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import axios from 'axios'
import firebase from 'firebase';


const coords = {lat: 28.630084,  lng: 77.371882}

//var donorMarker = "https://maps.gstatic.com/mapfiles/ms2/micons/man.png";
var donorMarker ="http://maps.google.com/mapfiles/kml/shapes/man.png";
var hospMarker ="http://maps.google.com/mapfiles/kml/shapes/hospitals.png";
var lat;
var lng;

var var_dist='';
var var_time='';

var markers=[]
const React_map = React.createClass({
  getInitialState() {

  return {
        markers:[],
        type:0,
        json:[],
        toggle:0,
        distance:'',
        time:'',
        lat: '',
        lng:'',
        hlat:'',
        hlng:'',
        waitingFor: this.props.waitingFor,
        username: this.props.username,
        userType: this.props.userType,
        userlat: this.props.userlat,
        userlong: this.props.userlong,
        userDist: this.props.userDist,
        userTime: this.props.userTime,
        hosplat: this.props.hosplat,
        hosplong: this.props.hosplong
      };
      console.log("after sending props:",this.props.userlat,this.props.userlong);
      console.log("after sending state:",this.state.userlat,this.state.userlong);

  },
  componentDidMount(){
     // this.onReady();
     // console.log("distance=", this.distance());
     console.log("after sending props:",this.props.userlat,this.props.userlong);
      console.log("after sending state:",this.state.userlat,this.state.userlong);

  },

  // onReady(){
  //   var that=this;
  //   var qs = require('qs');
      
  //   axios.post('/ret_hosp_loc/' ,qs.stringify({username: this.props.username}))
  //   .then(function (response) {
  //       console.log(response);
  //         if(response.data.error=="false"){

  //            that.setState({
  //           hlat: response.data.lat,
  //           hlng:  response.data.long,
  //           });
  //          }
  //         else{
  //           console.log("error=true");
  //         }       
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // },
  
  // distance(){
      
  //     var key="&key=AIzaSyBChu-qFYq9rJpaGOZcatYv_tbuTAu42Gw";
  //     var url="https://maps.googleapis.com/maps/api/distancematrix/json?units=metric";
  //     var origin="&origins=";
  //     console.log("here in distance");
  //     origin=origin.concat(this.state.lat).concat(",").concat(this.state.lng)
  //     var destination="&destinations=".concat(this.state.hlat).concat(",").concat(this.state.hlng)
  //     url=url.concat(origin).concat(destination).concat(key)

  //     console.log("url=>", url);
  //     var that=this;

  //     var qs = require('qs');
  //     axios.post("/FrontendDistance/",qs.stringify({url: url}))
  //     .then(function (response) {
  //         console.log(response);
  //         if(var_dist!= response.data.distance|| var_time!=response.data.time){
  //             var_dist=response.data.distance;
  //             var_time=response.data.time;
              
  //             that.setState({
  //              distance: response.data.distance,
  //              time: response.data.time,
  //            });
  //         }
  //       })
  // },
  
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    //console.log('onCloseClick');
    markers=[];
    var _this=this;
     _this.setState({
            toggle:0
            });
  },

  onClick(e) {
    console.log('onClick', e);
  },
  Mark(place){
    markers=[];
    //console.log("here in mark", place);
    markers.push({lat:place.lat, long:place.long,name:place.name })
    var _this=this;
     _this.setState({
            markers:markers,
            toggle:1
            });
   
  },
  
 

  render() {
   

    //console.log(this.state.json);

    var count=0;
    console.log("in render=>", this.state.userlat, this.state.userlong)
    return (
      <div>
      <Gmaps
        width={'800px'}
        height={'400px'}
        lat={this.state.userlat}
        lng={this.state.userlong}
        zoom={17}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyCp8MTlU-kdlw5wGd0DwYfERUr3U8fF6YA'}}
        onMapCreated={this.onMapCreated}
        >


        <Marker
            key="donor"
            lng= {this.state.userlong}
            lat={this.state.userlat}
            icon= {donorMarker}
           
            />
        <Marker
            key="hosp"
            lng= {this.state.hosplong}
            lat={this.state.hosplat}
            icon= {hospMarker}
           
        />
         <InfoWindow
                lng= {this.state.hosplong}
                lat={this.state.hosplat}
                content={this.props.username}
                onCloseClick={this.onCloseClick} />    

        <Circle
          lng= {this.state.userlong}
          lat={this.state.userlat}
          radius={100}
          onClick={this.onClick} />
          
      </Gmaps>
      <br/>
      <br/>
      <h1>distance={this.state.userDist}</h1>
      <br/>
      <br/>
      <h1>time={this.state.userTime}</h1>
      <br/>
      <br/>
      
      </div>
    );
  }

});

//ReactDOM.render(<React_map />, document.getElementById('React_map'));


export default React_map;



