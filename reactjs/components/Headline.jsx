import React from "react"


            
export default class Headline extends React.Component {
  render() {
    return (
    	<div>
        <form method="get" action="/home">
        < button type="submit">Home</button>
        </form>
        
        <form method="get" action="/signup">
        < button type="submit">Sign-Up</button>
        </form>
      
        <form method="get" action="/login">
        < button type="submit">Login</button>
        </form>
        
      	
      	<h1>{ this.props.children }</h1>
    	
    	</div>
    )
  }
}