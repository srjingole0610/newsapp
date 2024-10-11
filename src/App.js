
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

 class App extends Component {
/**
 * Renders the App component.
 *
 * This component renders a container with a Navbar and a News component. The
 * News component is rendered with a pageSize of 5.
 *
 * @return {JSX.Element} The rendered component.
 */
  render() {
   
    return (
      <div>
        <Navbar/>
        <News pageSize = {5}/>
      </div>
    )
  }}

export default App;
