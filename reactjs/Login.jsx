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


	   updateState(arg) {
	      var _this = this;
	      this.setState({session: arg});
	      this.props.updateStateProp(arg);
	   }
	  

	  render() {
	  	if(this.props.type=='login'){
		    return (
				<div>  
				<LoginContainer  
				 updateStateProp = {this.updateState}
				/>  
		    	<h1>LOGIN</h1>
				<h1>session in login jsx={this.state.session}</h1>	  
		    	</div>
		    )
	    }
	    else{
	    	return (<div></div>)
	    }
	  }
}
