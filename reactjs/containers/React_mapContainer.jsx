import React from "react"

import Map, {GoogleApiWrapper,  Marker } from 'google-maps-react'
import {searchNearby} from './utils/googleApiHelpers'
import Sidebar from '../components/Sidebar/Sidebar'

export class  React_mapContainer extends React.Component {
	
	constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }
  renderMarkers() {
  	if (!this.state.places) { return null; }

    return this.state.places.map(place =>{
      return <Marker key={place.id}
                name={place.id}
                place={place}
                position={place.geometry.location}
              />
    })
  }

  onReady(mapProps, map) {
    const {google} = this.props;
    
    var center = {lat: 28.630084,  lng: 77.371882}
    const opts = {
      location: center,
      radius: '500',
      types: ['hospital']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      })
      .catch((status, result) => {
        // There was an error
      })
  }
    render() {
    var center = {lat: 28.630084,  lng: 77.371882}
    
    return (
      <div>
      <Sidebar title={'Restaurants'} places={this.state.places} />
           {this.state.places.map(place => {
            return (<div key={place.id}>
              {place.name}
              <br></br>
              </div>)
          })} 
        <Map google={this.props.google} center={center} zoom={14} onReady={this.onReady.bind(this)}
          visible={true} >
           


           
           {this.state.places.map(place =>{
		      return <Marker key={place.id}
		                name={place.id}
		                place={place}
		                position={place.geometry.location}
		              />
		    })}

            
            

        </Map>
        

      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCtFQYIxjsn5wupo8OtEegU4u3QfLQVHMI"
})(React_mapContainer)


