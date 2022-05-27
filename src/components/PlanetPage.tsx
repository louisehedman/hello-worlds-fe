import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  let { slug } = useParams();

  const getPlanet = async () => {
    await axios.get(`http://localhost:4000/planets/${slug}`).then((res) => {
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
      <div className="container px-4 pt-4 bg-dark">
        <h2 className="text-left text-white">{planet?.name}</h2>
        <p className="text-white">Add to List</p>
        <img 
        src={`${planet?.image}`} 
        width="20px"
        style={{
          width: "auto",
          height: "40vh"
        }}

        />
        <div className="text-center py-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
         <div className="p-4">
         <div className="px-4">
          <h3>Temperature</h3>
          <p>{planet?.avgTemp}</p>
          <h3>Distance</h3>
          <p>{planet?.earthDistance}</p>
          </div>
          </div>
        </div>
        <div className="container px-4 pb-4 text-left py-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
          <h3 className="text-center">Description</h3>
          <p>{planet?.description}</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};
