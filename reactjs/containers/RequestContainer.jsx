import React from "react"
import { render } from "react-dom"
import reactCSS from 'reactcss'
import Headline from "../components/Headline"
import PingContainer from "./PingContainer"

export default class RequestContainer extends React.Component {

	render(){
		return(
			<div style={{backgroundColor: 'Black'}}>
			<Headline></Headline>
		    <PingContainer></PingContainer>
		    </div>
		);
	}
}