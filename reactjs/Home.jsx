import React from "react"
import { render } from "react-dom"
import HomeContainer from "./containers/HomeContainer"
import reactCSS from 'reactcss'
class Home extends React.Component {


  render() {
  	var divStyle = {
	  background: "#eee",
	  padding: "20px",
	  margin: "20px"
	};

    const styles = reactCSS({
	  'default': {
		  	wrapper: {
			  background: 'blue',
			} ,
		    
	  },
	})
    return (
    	<div style={divStyle}>
		arjunaasdf
		<h1>BLOOD RUNNERS HOME</h1>
    	<HomeContainer/>  
    	</div>
    )
  }
}

render(<Home/>, document.getElementById('Home'))