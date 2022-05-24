import React from 'react';
import './App.css';
import TripBlog from './components/blog/tripblog';
import Slider from './components/slider/slider';

function App() {
  return (
    <div className="App">
      <Slider />
      <TripBlog />
    </div>
  );
}

export default App;
