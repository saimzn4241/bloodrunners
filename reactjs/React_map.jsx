import React from "react"
import { render } from "react-dom"
import React_mapContainer from "./containers/React_mapContainer2"
import Map, {GoogleApiWrapper} from 'google-maps-react'



class React_map extends React.Component {
  render() {
    return (
      <div>  Hello from the container
       <React_mapContainer/> 
      </div>
    )
  }
}

render(<React_map/>, document.getElementById('React_map'))



