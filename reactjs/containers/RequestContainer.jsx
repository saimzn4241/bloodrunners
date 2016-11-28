import React from "react"
import { render } from "react-dom"
import reactCSS from 'reactcss'
import Headline from "../components/Headline"
import PingContainer from "./PingContainer"

export default class RequestContainer extends React.Component {

	render(){
		return(
			<div className="container">
		        <div className="row">
		        	<div className="col-sm-12">
		            	<Headline></Headline>
		            	<PingContainer></PingContainer>
		          	</div>
		        </div>
		    </div>
		);
	}
}