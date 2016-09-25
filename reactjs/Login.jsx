import React from "react"
import { render } from "react-dom"

import LoginContainer from "./containers/LoginContainer"

class Login extends React.Component {
  render() {
    return (
		<div>  
		<LoginContainer/>  
    	<h1>LOGIN</h1>
    	</div>
    )
  }
}

render(<Login/>, document.getElementById('Login'))