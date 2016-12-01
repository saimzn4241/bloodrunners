import React from "react"
import { render } from "react-dom"
import axios from 'axios'
import * as firebase from 'firebase';

import Loc_changeContainer from "./containers/Loc_changeContainer"


class Loc_change extends React.Component {

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
			
			<Loc_changeContainer/>
			
			
		);
	}
}

render(<Loc_change/>, document.getElementById('Loc_change'))