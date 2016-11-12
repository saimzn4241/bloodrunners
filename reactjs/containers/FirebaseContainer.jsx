import React, { Component } from 'react';
import firebase from 'firebase';
import Headline from "../components/Headline";

export default class App extends Component {

  constructor(){

    super();
    this.state = {
      speed: 1
    };
    
  }
  componentDidMount(){
    var that=this;
    const rootRef= firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
 
    speedRef.on('value', function(snapshot){
         that.setState({
          speed: snapshot.val()
        });     
    });
  }
  
  render() {
    console.log(this.state.speed);
  
    return (
      <div className="App">
       <h1>{this.state.speed}</h1> 
      </div>
    );
  }
}

