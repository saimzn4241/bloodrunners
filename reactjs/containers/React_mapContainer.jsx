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
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
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
    return (
      <div> 
        <Map google={this.props.google} zoom={14} onReady={this.onReady.bind(this)}
          visible={true} >
           <Sidebar title={'Restaurants'} places={this.state.places} />
           
           {this.state.places.map(place =>{
		      return <Marker key={place.id}
		                name={place.id}
		                place={place}
		                position={place.geometry.location}
		              />
		    })}

            {this.state.places.map(place => {
            return (<div key={place.id}>
            	{place.name}
            	<br></br>
            	</div>)
          })}
            

        </Map>
        

      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCtFQYIxjsn5wupo8OtEegU4u3QfLQVHMI"
})(React_mapContainer)


