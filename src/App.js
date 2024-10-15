import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News   from './Component/News';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  /**
   * Renders the App component.
   *
   * This component renders a container with a Navbar and a News setProgess={setProgess}  component.
   * The News setProgess={setProgess}  component is rendered with a pageSize of 5.
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
    const country = "us";

  

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={4}
        color='#f11946'
        loaderSpeed={1000}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route
              path="/about"
              element={<About/>}
            />
            {categories.map(({ path, category }) => (
              <Route
                key={path}
                path={path}
                element={<News setProgress={this.setProgress} apiKey = {this.apiKey}  className="bg-light" pageSize={pageSize} country={country}category={category} />}
              />
            ))}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

