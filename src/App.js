import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import News   from './Component/News';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


function App() {
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
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
        height={4}
      color='#f11946'
      loaderSpeed={1000}
      progress={progress}
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
              element={<News setProgress={setProgress} apiKey = {apiKey}  className="bg-light" pageSize={pageSize} country={country}category={category} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App


