import React from "react"
import { render } from "react-dom"
import React_map from "./containers/React_map"

class Home extends React.Component {
 

  render() {
    return (
		<div>  
		<h1>React_map</h1>
    	<React_map/>  
    	</div>
    )
  }
}

render(<React_map/>, document.getElementById('React_map'))