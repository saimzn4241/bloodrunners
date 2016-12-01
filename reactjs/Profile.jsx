import React from "react"
import { render } from "react-dom"
import ProfileContainer from "./containers/ProfileContainer"
import Headline from "./components/Headline"
import * as firebase from 'firebase'

class Profile extends React.Component {

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
		<Headline></Headline>
		<h1>Profile</h1>
		<ProfileContainer/>
		</div>
    )
  }
}

render(<Profile/>, document.getElementById('Profile'))