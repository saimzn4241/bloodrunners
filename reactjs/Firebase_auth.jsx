import React from "react"
import { render } from "react-dom"
import Firebase_authContainer from "./containers/Firebase_authContainer"
import * as firebase from 'firebase'


class Firebase_auth extends React.Component {
 

  render() {
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
		<h1>Firebase_Auth HOME</h1>
    	<Firebase_authContainer/>  
    	</div>
    )
  }
}

render(<Firebase_auth/>, document.getElementById('Firebase_auth'))