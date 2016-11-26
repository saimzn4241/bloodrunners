import React from "react"
import { render } from "react-dom"

//import App1Container from "./containers/App1Container"


class map1 extends React.Component {
  state = { 
    forecast:{} 
  };

  propTypes = {
    np_url: React.PropTypes.string,
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
  };

  markers = [];


  render() {
    return( <div >
    <h1>heree..</h1>
    </div>)
  }

  componentDidMount() {
    this.map = this.createMap()
   }

  createMap() {
    let mapOptions = {
      zoom: 3,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapdiv, mapOptions)
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.init_lat,
      this.props.init_lng
    )
  }

  l
  createMarker(val, map) {
     let pointval = new google.maps.LatLng(
       parseFloat(val['geometry']['coordinates'][1]),
       parseFloat(val['geometry']['coordinates'][0]));
     let titleText = val['properties']['title']       
     let marker = new google.maps.Marker({
       position: pointval,
       map: map,
       title: titleText
     });
    
    return marker
  }
}

 

let init_lng = -98.5795
let init_lat = 39.8282 
let nps_url = "https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/react_nps/np.geojson"

render(<map1 init_lat={init_lat} init_lng={init_lng} nps_source={nps_url} />, document.getElementById('map1'));


//ReactDOM.render(<NpsForecastMap init_lat={init_lat} init_lng={init_lng} nps_source={nps_url} />, document.getElementById('container'));

