import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      warning: false
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    if (this.state.counter < 1) {
      this.setState({ warning: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    if (this.state.counter < 1) {
      this.setState({ warning: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          Decrement counter
        </button>
        {this.state.warning && (
          <div data-test="warning" style={{ color: "red", fontSize: "40px" }}>
            Cannot go below 0
          </div>
        )}
      </div>
    );
  }
}

export default App;
