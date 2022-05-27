import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<PlanetInterface | undefined>>;
}

interface PlanetInterface {
  _id: string | undefined;
  name: string | undefined;
  moons: Array<{ id: number; moon: string }> | undefined;
  avgTemp: number | undefined;
  earthDistance: number | undefined;
  shortDescription: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

export const PlanetPage = () => {
  const [planet, setPlanet] = useState<PlanetInterface>();

  const getPlanet = async () => {
    await axios.get(`http://localhost:4000/planets/Mars`).then((res) => {
      setPlanet({
        _id: res.data.planet._id,
        name: res.data.planet.name,
        moons: res.data.planet.moons,
        avgTemp: res.data.planet.avgTemp,
        earthDistance: res.data.planet.earthDistance,
        shortDescription: res.data.planet.shortDescription,
        description: res.data.planet.description,
        image: res.data.planet.image,
      });
    });
  };

  useEffect(() => {
    getPlanet();
  }, []);

  return (
    <div>
      <div className="container col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h2 className="mb-4 font-weight-bold">{planet?.name}</h2>
        <p>Add to List</p>
        <img src={`${planet?.image}`}/>
        <div className="planet-data">
          <h3>Temperature</h3>
          <p>{planet?.avgTemp}</p>
          <h3>Distance</h3>
          <p>{planet?.earthDistance}</p>
        </div>
        <div className="planet-description">
          <h3>Data</h3>
          <p>{planet?.description}</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};
