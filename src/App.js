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
    const categories = [
      { path: '/', category: 'general' },
      { path: '/business', category: 'business' },
      { path: '/entertainment', category: 'entertainment' },
      { path: '/general', category: 'general' },
      { path: '/health', category: 'health' },
      { path: '/science', category: 'science' },
      { path: '/sports', category: 'sports' },
      { path: '/technology', category: 'technology' },
    ];
    const pageSize = 5;
    const country = "us"

    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/about"
              element={<About/>}
            />
            {categories.map(({ path, category }) => (
              <Route
                key={path}
                path={path}
                element={<News className="bg-light" pageSize={pageSize} country={country}category={category} />}
              />
            ))}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

