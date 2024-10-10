
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

 class App extends Component {
  render() {
   
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }}

export default App;
