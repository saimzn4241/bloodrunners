import React from "react"
import { render } from "react-dom"
import HomeContainer from "./containers/HomeContainer"

class Home extends React.Component {
 

  render() {
    return (
		<div>  
		<h1>BLOOD RUNNERS HOME</h1>
    	<HomeContainer/>  
    	</div>
    )
  }
}

render(<Home/>, document.getElementById('Home'))