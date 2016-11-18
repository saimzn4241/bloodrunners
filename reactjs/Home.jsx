import React from "react"
import { render } from "react-dom"
import HomeContainer from "./containers/HomeContainer"
import * as firebase from 'firebase'

class Home extends React.Component {
 

  render() {
  	// firebase Configuration
  	var config = {
	    apiKey: "AIzaSyByJRvqKlrKvvQFOnfsIe4FlyEWkBZqEhg",
	    authDomain: "bloodrunners-1475434067536.firebaseapp.com",
	    databaseURL: "https://bloodrunners-1475434067536.firebaseio.com",
	    storageBucket: "bloodrunners-1475434067536.appspot.com",
	    messagingSenderId: "801146093422"
    };

  	firebase.initializeApp(config);

    return (
		<div>  
		<h1>BLOOD RUNNERS HOME</h1>
    	<HomeContainer/>  
    	</div>
    )
  }
}

render(<Home/>, document.getElementById('Home'))