import axios from "axios";
import React, { useEffect, useState } from "react";
import PlanetSlider from "./Slider";

import TripBlog from "./Tripblog";

const Home: React.FC = () => {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    if (!planets) {
      try {
        axios.get(`http://localhost:4000/planets`).then((response: any) => {
          console.log(response);
          setPlanets(response.data.planets);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <>
      {planets && <PlanetSlider planets={planets} />}
      <TripBlog />
    </>
  );
};

export default Home;
