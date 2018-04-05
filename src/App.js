import React, { Component } from 'react';
import './App.css';


let nmb = 0


class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <span className="value" >{this.state.number}</span>
        <button id="inc" onClick={this.Increment.bind(this)}>Incrementa</button>
      </div>
    );
  }

  Increment = () => {
    this.setState({ number: this.state.number + 1 });
  }
}

export default App;
