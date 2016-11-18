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
      email: '',
      notif:'',
      
    }
  }
  componentDidMount(){
    // var that=this;
    // firebase.auth().onAuthStateChanged(firebaseUser=>{
    //   if(firebaseUser){
    //     console.log(firebaseUser);
    //     this.setState({
    //       user:firebaseUser.email,
    //       value:"loggedin"
    //     }, function afterStateChange (){
    //       this.notif_check();
    //     });
    //   }
    //   else{
    //    console.log("not logged in"); 
    //    this.setState({
    //       value:"notloggedin",
    //       user:""
    //     }, function afterStateChange (){
    //       this.notif_check();
    //     }); 
    //   }
    // });
    // this.notif_check();
    this.stateChange();

  }
  notif_check(){
    var that=this;
    const rootRef= firebase.database().ref().child('notification/notif');
    console.log("==========28==========");
    console.log(this.state.value);
    console.log("==========30==========");
    rootRef.on('value', function(snapshot){
        console.log(snapshot.val());

          that.setState({
           notif: snapshot.val()
         });     
    });
  }

  signIN() {
    var email=this.state.email;
    var password= this.state.password;
    var _this = this;
    const auth=firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)); 
    var that = this;
    // firebase.auth().onAuthStateChanged(firebaseUser=>{
    //   if(firebaseUser){
    //     console.log(firebaseUser);
    //     this.setState({
    //       user:firebaseUser.email,
    //       value:"loggedin"
    //     }, function afterStateChange (){
    //       this.notif_check();
    //     });
    //   }
    //   else{
    //    console.log("not logged in"); 
    //    this.setState({
    //       value:"notloggedin",
    //       user:""
    //     }, function afterStateChange (){
    //       this.notif_check();
    //     }); 
    //   }
    // });
    that.stateChange();

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
        }, function afterStateChange (){
          this.notif_check();
        });
      }
      else{
       console.log("not logged in stateChange");
       console.log(this.state.value); 
       this.setState({
          value:"notloggedin",
          user:"",
          notif:""
        }); 
      }
    });

  }

  PING(){
    var that=this;
    const rootRef= firebase.database().ref().child('notification');
    
    rootRef.set({
    notif: 'bloodneeded',
    user: this.state.user
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
                  <h1>notification={this.state.notif}</h1>
                  
                  <input type="button" className="btn btn-primary" value="SignUp" onClick={this.signUP.bind(this)}/>
                  <input type="button" className="btn btn-danger" value="LogOUT" onClick={this.logOUT.bind(this)}/>
                  

                  <input type="button" className="btn btn-danger" value="PING" onClick={this.PING.bind(this)}/>
                  
                  

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
                  <h1>notification={this.state.notif}</h1>
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

