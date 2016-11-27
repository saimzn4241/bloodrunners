import React from "react"
import { render } from "react-dom"

import LoginContainer from "./containers/LoginContainer"

export default class Login extends React.Component {
	  
	  constructor(props) {
	      super(props);
			
	      this.state = {
	         session: ''
	      }

	      this.updateState = this.updateState.bind(this);
	   };


	   updateState(arg,loginEmail,loginPassword,userType) {
	      var _this = this;
	      this.setState({
	      	session: arg,
	        email: loginEmail,
	        password: loginPassword
      	});
	      this.props.updateStateProp(arg,loginEmail,loginPassword,userType);
	   }
	  

	  render() {
	  	if(this.props.type=='login'){
		    return (
				<div>  
				<h1>LOGIN</h1>
				
				<LoginContainer  
				 updateStateProp = {this.updateState}
				/>  
		    	<h1>{this.state.session}</h1>	  
		    	</div>
		    )
	    }
	    else{
	    	return (<div></div>)
	    }
	  }
}
