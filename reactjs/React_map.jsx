

import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import axios from 'axios'
const coords = {lat: 28.630084,  lng: 77.371882}
//var donorMarker = "https://maps.gstatic.com/mapfiles/ms2/micons/man.png";
var donorMarker ="http://maps.google.com/mapfiles/kml/shapes/man.png";
var hospMarker ="http://maps.google.com/mapfiles/kml/shapes/hospitals.png";
var lat;
var lng;
var markers=[]
const React_map = React.createClass({
  getInitialState() {
	return {
        markers:[],
      	type:0,
      	json:[],
        toggle:0,

      };
	},
	componentWillMount(){

		this.onReady();
	},
	onReady() {
	    var _that=this
	    axios.post('/MarkerInfo/' )
	    .then(function (response) {
	        console.log(response);
	      _that.setState({
	          type: 1,
	          json:response.data
	        });
	    })
	    .catch(function (error) {
          console.log(error);
        });

 	},

 	

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
  
    return (
      <Gmaps
        width={'100%'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={14}
        loadingMessage={'loading Map....Be happy'}
        params={{v: '3.exp', key: 'AIzaSyCwVTLGKslXV0UwsLFLP9NSEibmNMoK97c'}}
        onMapCreated={this.onMapCreated}
        >


        {this.state.json.map(place =>{
          if(place.type=="donor"){
            return <Marker
            key={place.username}
            lng= {place.long}
            lat={place.lat}
            icon= {donorMarker}
            />
          }
          else if(place.type=="hospital"){
            return <Marker
            key={place.username}
            lng= {place.long}
            lat={place.lat}
            icon= {hospMarker}
            onClick={this.Mark.bind(this, place)} 
            
            />
            
          }
          
        
	       })
        }

          {
              this.state.markers.map(place =>{
              if(this.state.toggle==1)
               return <InfoWindow
                lat={place.lat}
                lng={place.long}
                content={place.name}
                onCloseClick={this.onCloseClick} />
                
               })
            
        }


        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

//ReactDOM.render(<React_map />, document.getElementById('React_map'));


export default React_map;



