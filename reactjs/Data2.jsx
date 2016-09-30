import React from "react"
import ReactDOM from "react-dom"
import axios from 'axios';



///////////////////////////////////////////////////


var Data2 = React.createClass({
  
  getInitialState: function() {
    return {
      requ: ""
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest = axios.get("/req").then(function(result) {    
          console.log(result)
          _this.setState({
          requ: result.data.foo
          });
     }
    )
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
  return(
    <div>
    <h1>
    {this.state.requ}
    </h1>
   </div>         
  );
  }
});

ReactDOM.render(<Data2/>, document.getElementById('Data2'))
