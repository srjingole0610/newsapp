
import './App.css';
import React, { Component } from 'react'

 class App extends Component {
  /**
   * This is the main class for the App component
   * It renders a single div with the message "Hello my first class based Component"
   * @returns {JSX.Element}
   */
   c = "suraj";
  render() {
   
    return (
      <div>
        {/* Simple message to be displayed */}
        Hello my first class based Component {this.c}
      </div>
    )
  }
}

export default App;
