import React, { useEffect } from 'react';
import './App.css';
import TripBlog from './components/blog/tripblog';
// import axios from 'axios';
import HeroSlider from './components/newSlider';

const axios = require('axios');

function App() {
  // const [planets: any, setPlanets] = useState('');


  useEffect(() => {

    try {
      axios.get(`http://localhost:4000/planets`)
        .then((response: any) => {
          console.log(response);
        });
      } catch (error) {
        console.log(error);
      }
  })

  

  return (
    <div className="App">
      <HeroSlider /> 
      <TripBlog />
    </div>
  );
}

export default App;
