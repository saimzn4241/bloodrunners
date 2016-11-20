import React from "react"

import Map, {GoogleApiWrapper,  Marker } from 'google-maps-react'
import {searchNearby} from './utils/googleApiHelpers'
import Sidebar from '../components/Sidebar/Sidebar'
import axios from 'axios'
export class  React_mapContainer2 extends React.Component {
	
	constructor(props) {
    super(props);

    this.state = {
      type:0,
      json:[]

    }
  }
  onReady(mapProps, map) {
    const {google} = this.props;
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
          return null; 
        });

 }

Marker(){
  if (!this.state.json) { return null; }

    return this.state.json.map(place =>{
      return <Marker
      key={place.username}
      longitude= {place.long}
      latitude={place.lat}
              />
    })
}

  
  
    render() {
    
    var center = {lat: 28.630084,  lng: 77.371882}
    
    return (
      <div>
        <Map google={this.props.google} center={center} zoom={14} visible={true} onReady={this.onReady.bind(this)}>
          {this.Marker()}


        </Map>
        

      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCtFQYIxjsn5wupo8OtEegU4u3QfLQVHMI"
})(React_mapContainer2)


