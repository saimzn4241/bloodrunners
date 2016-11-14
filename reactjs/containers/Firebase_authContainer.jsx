import React, { Component } from 'react';
import firebase from 'firebase';
import Headline from "../components/Headline";

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      user:'',
      value: 'notloggedin',
      password: '',
      email: ''
      
    }
  }
  componentDidMount(){
    var that=this;
    that.stateChange();
    // var that=this;
    // const rootRef= firebase.database().ref().child('react');
    // const speedRef = rootRef.child('speed');
 
    // speedRef.on('value', function(snapshot){
    //      that.setState({
    //       speed: snapshot.val()
    //     });     
    // });
  }

  signIN() {
    var email=this.state.email;
    var password= this.state.password;
    var _this = this;
    const auth=firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)); 

    this.stateChange();

  }

  signUP() {
    var email=this.state.email;
    var password= this.state.password;
    var _this = this;
    const auth=firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)); 

    this.stateChange();
  }
  logOUT() {
    const auth=firebase.auth().signOut();
    this.stateChange();
  }
  stateChange(){

    firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(firebaseUser){
        console.log(firebaseUser);
        this.setState({
          user:firebaseUser.email,
          value:"loggedin"
        });
      }
      else{
       console.log("not logged in"); 
       this.setState({
          value:"notloggedin",
          user:""
        }); 
      }
    });

  }
  
  updateEmail(e) {
      this.setState({email: e.target.value});
  }

  updatePassword(e) {
      this.setState({password: e.target.value});
  }

  render() {
    if(this.state.value=="loggedin"){
     return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              
                  Email:
                  <input type="text"   name="email" onChange = {this.updateEmail.bind(this)}>
                  </input>
                  <br></br>

                  Password:    
                  <input type="password"  name="password" onChange = {this.updatePassword.bind(this)}>
                  </input>
                  
                  
                  <br></br>
                  
                  <h4>{this.state.value}</h4>
                  <h4>{this.state.user}</h4>
                  
                  <input type="button" className="btn btn-default"  value="SignIn" onClick={this.signIN.bind(this)}/>
                  <input type="button" className="btn btn-primary" value="SignUp" onClick={this.signUP.bind(this)}/>
                  <input type="button" className="btn btn-danger" value="LogOUT" onClick={this.logOUT.bind(this)}/>
                  
                  

            </div>
          </div>
        </div>
      ) 
    }
    else{
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              
                  Email:
                  <input type="text"   name="email" onChange = {this.updateEmail.bind(this)}>
                  </input>
                  <br></br>

                  Password:    
                  <input type="password"  name="password" onChange = {this.updatePassword.bind(this)}>
                  </input>
                  
                  
                  <br></br>
                  
                  <h4>{this.state.value}</h4>
                  <h4>{this.state.user}</h4>
                  
                  <input type="button" className="btn btn-default"  value="SignIn" onClick={this.signIN.bind(this)}/>
                  <input type="button" className="btn btn-primary" value="SignUp" onClick={this.signUP.bind(this)}/>
                  <input type="button" className="btn btn-danger btn-action hide" value="LogOUT" onClick={this.logOUT.bind(this)}/>
                  
                  

            </div>
          </div>
        </div>
      )
    }
      
    

  }
}

