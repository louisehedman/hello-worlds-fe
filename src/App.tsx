import React from 'react';
import './App.css';
import TripBlog from './components/blog/tripblog';
import PlanetSlide from './components/planets';

function App() {
  return (
    <div className="App">
      <PlanetSlide />
      <TripBlog />
    </div>
  );
}

export default App;
