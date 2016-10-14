import React from "react"
import { render } from "react-dom"
import ProfileContainer from "./containers/ProfileContainer"

class Profile extends React.Component {

  render() {
    return (
		<div>  
		<h1>Profile</h1>
		<ProfileContainer/>
		</div>
    )
  }
}

render(<Profile/>, document.getElementById('Profile'))