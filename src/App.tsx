import React, { useEffect, useState } from 'react';
import './App.css';
import TripBlog from './components/blog/tripblog';
import Slider from './components/slider/slider';
import axios from 'axios';

function App() {
  // const [planets: any, setPlanets] = useState('');


  useEffect(() => {
    axios.get(`http://localhost:4000/planets`).then((res) => {
      console.log(res);
      
      // setPlanets(res.data)
    })
  }, [])



  return (
    <div className="App">
      <Slider /> 
      <TripBlog />
    </div>
  );
}

export default App;
