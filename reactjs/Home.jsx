import React from "react"
import { render } from "react-dom"

import HomeContainer from "./containers/HomeContainer"

class Home extends React.Component {
  render() {
    return (
		<div>  
		<HomeContainer/>  
    	<h1>HOME</h1>
    	</div>
    )
  }
}

render(<Home/>, document.getElementById('Home'))