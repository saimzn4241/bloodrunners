import React from "react"
import { render } from "react-dom"
import FirebaseContainer from "./containers/FirebaseContainer"
import * as firebase from 'firebase'


class Firebase extends React.Component {
 

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
		<h1>Firebase HOME</h1>
    	<FirebaseContainer/>  
    	</div>
    )
  }
}

render(<Firebase/>, document.getElementById('Firebase'))