import React from "react"
import ReactDOM from "react-dom"
import axios from 'axios';



///////////////////////////////////////////////////


var Data = React.createClass({

  getInitialState: function() {
    return {
      jobs: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest = axios.get("http://codepen.io/jobs.json").then(function(result) {    
          _this.setState({
            jobs: result.data.jobs
          });

    }

    )
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
       <div>
        <h1>Jobs!</h1>
        {this.state.jobs.map(function(job) {
          return (
            <div key={job.id} className="job">
              <a href={job.url}>
                {job.company_name}
                is looking for a 
                {job.term}
                {job.title}
              </a>
            </div>
          );
        })}
      </div>
    )
  }
});

ReactDOM.render(<Data/>, document.getElementById('Data'))
