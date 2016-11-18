import React from "react"
import { render } from "react-dom"
import Signup from "./Signup"
import * as firebase from 'firebase'


class SignupFirebaseConfig extends React.Component{

	render(){
	    var config = {
	      apiKey: "AIzaSyByJRvqKlrKvvQFOnfsIe4FlyEWkBZqEhg",
	      authDomain: "bloodrunners-1475434067536.firebaseapp.com",
	      databaseURL: "https://bloodrunners-1475434067536.firebaseio.com",
	      storageBucket: "bloodrunners-1475434067536.appspot.com",
	      messagingSenderId: "801146093422"
	    };
    	firebase.initializeApp(config);
    	return(
    		<div>
    			<Signup/>
    		</div>
    	);
	}
}

render(<SignupFirebaseConfig/>, document.getElementById('Signup'))