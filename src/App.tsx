import React, { useEffect, useState } from 'react';
import './App.css';
import TripBlog from './components/blog/tripblog';
import Slider from './components/slider/slider';
import axios from 'axios';
import HeroSlider from './components/newSlider';

function App() {
  // const [planets: any, setPlanets] = useState('');


  useEffect(() => {
    axios.get(`http://localhost:4000/planets`).then((response) => {
      console.log(response);
      
      // setPlanets(res.data)
    })
  }, [])



  return (
    <div className="App">
      <HeroSlider /> 
      <TripBlog />
    </div>
  );
}

export default App;
