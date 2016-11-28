import React from "react"
import { render } from "react-dom"
import reactCSS from 'reactcss'
import * as firebase from 'firebase'
import RequestContainer from "./containers/RequestContainer"

class Request extends React.Component {

	render(){

		// firebase Configuration
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
				<RequestContainer/>
			</div>
		);
	}
}

render(<Request/>, document.getElementById('request'))