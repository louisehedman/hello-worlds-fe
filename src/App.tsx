import React, { useEffect, useState } from 'react';
import './App.css';
import TripBlog from './components/blog/tripblog';
// import axios from 'axios';
import PlanetSlider from './components/slider';
import { Footer } from "./components/Footer";
const axios = require('axios');

function App() {
  const [planets, setPlanets] = useState(null);


  useEffect(() => {
    if (!planets) {
      try {
      axios.get(`http://localhost:4000/planets`)
        .then((response: any) => {
          console.log(response);
          setPlanets(response.data.planets);
        });
      } catch (error) {
        console.log(error);
      }
    }
    
  })

  

  return (
    <div className="App">
      {planets && <PlanetSlider 
      planets={planets}/>} 
      <TripBlog />
      <Footer />
    </div>
  );
}

export default App;
