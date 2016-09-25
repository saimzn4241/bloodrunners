import React from "react"
import { render } from "react-dom"

import SignupContainer from "./containers/SignupContainer"

class Signup extends React.Component {
  render() {
    return (
		<div>  
		<SignupContainer/>  
    	<h1>Signup</h1>
    	</div>
    )
  }
}

render(<Signup/>, document.getElementById('Signup'))