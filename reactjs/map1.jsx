
import React from "react"
import { render } from "react-dom"

import Map1Container from "./containers/Map1Container"
import firebase from 'firebase'

class Map1 extends React.Component {
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
      <Map1Container />
    )
  }
}

render(<Map1/>, document.getElementById('map1'))