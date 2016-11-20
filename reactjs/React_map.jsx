

import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import axios from 'axios'
const coords = {lat: 28.630084,  lng: 77.371882}

const React_map = React.createClass({

	getInitialState() {
	return {
      	type:0,
      	json:[]

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
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {

    	console.log(this.state.json);
    return (
      <Gmaps
        width={'1200px'}
        height={'900px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyCwVTLGKslXV0UwsLFLP9NSEibmNMoK97c'}}
        onMapCreated={this.onMapCreated}
        >
        {this.state.json.map(place =>{
        	console.log("here")
	      return <Marker
	      lng= {place.lat}
	      lat={place.long}
	              />
	    })

    	}
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

ReactDOM.render(<React_map />, document.getElementById('React_map'));






