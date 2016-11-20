import React from "react"
import { render } from "react-dom"
import HomeContainer from "./containers/HomeContainer"
import reactCSS from 'reactcss'
import * as firebase from 'firebase'

class Home extends React.Component {


  render() {
  	var divStyle = {
	  background: "#eee",
	  padding: "20px",
	  margin: "20px"
	};

    const styles = reactCSS({
	  'default': {
		  	wrapper: {
			  background: 'blue',
			} ,
		    
	  },
	})
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
    	<div style={divStyle}>
		arjunaasdf
		<h1>BLOOD RUNNERS HOME</h1>
    	<HomeContainer/>  
    	</div>
    )
  }
}

render(<Home/>, document.getElementById('Home'))