import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {

/* Local state of application */
constructor(props) {
  super(props);
  this.state = {
    deadline: 'July 3, 2018',
    newDeadline: ''
  }
}

/* Method used to change the deadline state dynamically */
/* Event handler onClick used for button to call changeDeadline method with anon func to prevent loops in code */
changeDeadline() {
  console.log('state', this.state);
  this.setState({deadline: this.state.newDeadline});
}

  render() {
    return(
    /* Basic HTML structure of Application, classNames given for CSS*/
    <div className="App">
      <div className="App-title">Countdown to {this.state.deadline}</div>
      <Clock
        deadline={this.state.deadline}
      />
      <div>
        <input
          placeholder="Enter New Date"
          onChange={event => this.setState({newDeadline: event.target.value})}
        />
        <button className="submitButton" onClick={() => this.changeDeadline()}>
          Submit Date
        </button>
      </div>
    </div>

    )
  }
}

export default App;
