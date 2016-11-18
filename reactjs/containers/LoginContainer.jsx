import React from "react"

import axios from 'axios';


export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      password: '',
      username: ''
      
    }
  }

  request() {
    var username=this.state.username;
    var password= this.state.password;
    var qs = require('qs');
    var _this = this;
    axios.post('/login_verify/' ,qs.stringify({password: password , username: username}))
    .then(function (response) {
     
        console.log(response);
        console.log("here");
          
       

          if(response.data.login_value=="ok"){

             _this.setState({
            value: response.data.login_value
            });

            console.log("okok1");
            var arg=_this.state.username;
            var email=(arg).concat("@gmail.com");
            console.log(arg,email,password);
             _this.props.updateStateProp(arg,email,password);
          }
          else{
             _this.setState({
            value: "(incorrect username or password)"
            });
          }       
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }    


  updateUsername(e) {
      this.setState({username: e.target.value});
   }

   updatePassword(e) {
      this.setState({password: e.target.value});
   }

  render() {
    
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              
                  Username:
                  <input type="text"   name="username" onChange = {this.updateUsername.bind(this)}>
                  </input>
                  <br></br>

                  Password:    
                  <input type="password"  name="password" onChange = {this.updatePassword.bind(this)}>
                  </input>
                  
                  
                  <br></br>
                  
                  <h4>{this.state.value}</h4>
                  
                  <input type="button" value="Submit" onClick={this.request.bind(this)}/>
                  
                  

            </div>
          </div>
        </div>
      )
    

  }
}