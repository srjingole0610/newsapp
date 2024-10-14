import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

class App extends Component {
  /**
   * Renders the App component.
   *
   * This component renders a container with a Navbar and a News component.
   * The News component is rendered with a pageSize of 5.
   *
   * @return {JSX.Element} The rendered component.
   */
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route
              path="/about"
              element={<About/>}
            />
            <Route
              path="/"
              element={<News pageSize={5} country="us" category="general" />}
            />
            <Route
              path="/business"
              element={<News pageSize={5} country="us" category="business" />}
            />
            <Route
              path="/general"
              element={<News pageSize={5} country="us" category="general" />}
            />
            <Route
              path="/entertainment"
              element={<News pageSize={5} country="us" category="entertainment" />}
            />
            <Route
              path="/health"
              element={<News pageSize={5} country="us" category="health" />}
            />
            <Route
              path="/science"
              element={<News pageSize={5} country="us" category="science" />}
            />
            <Route
              path="/sports"
              element={<News pageSize={5} country="us" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News pageSize={5} country="us" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
