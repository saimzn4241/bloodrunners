import React from "react"

import axios from 'axios';


export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    var qs = require('qs');
    var _this = this;
    axios.get('/extra1/')
    .then(function (response) {
     
        console.log(response);
        console.log("here");
               
    })
    .catch(function (error) {
      console.log(error);
    });



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
          
        _this.setState({
            value: response.data.login_value
            });

          if(_this.state.value=="ok"){
            console.log("okok1");
            var arg=_this.state.username;
            console.log(arg);
             _this.props.updateStateProp(arg);
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
                  
                  
                  <input type="button" value="Submit" onClick={this.request.bind(this)}/>
                  
                  <h1>{this.state.value}</h1>
                  

            </div>
          </div>
        </div>
      )
    

  }
}