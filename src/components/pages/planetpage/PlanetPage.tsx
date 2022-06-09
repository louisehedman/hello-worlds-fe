import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PlanetInterface } from "../../../interfaces/interfaces";
import { API_URL } from "../../../helpers/urls";
import SuperAwesomeButton from "./SuperAwesomeButton";
import toCelsius from "../../../helpers/KelvinConverter";


export const PlanetPage = () => {
  const [planet, setPlanet] = useState<PlanetInterface>();
  let { slug } = useParams();


  

  const numberWithSpaces = (nr: number | undefined) => {
    return nr?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  useEffect(() => {
    const getPlanet = async () => {
      await axios.get(API_URL(`planets/${slug}`)).then((res) => {
        setPlanet({
          _id: res.data.planet._id,
          name: res.data.planet.name,
          moons: res.data.planet.moons,
          avgTemp: res.data.planet.avgTemp,
          earthDistance: res.data.planet.earthDistance,
          shortDescription: res.data.planet.shortDescription,
          description: res.data.planet.description,
          image: res.data.planet.image,
          mass: res.data.planet.mass,
          grav: res.data.planet.grav,
          radius: res.data.planet.radius,
        });
      });
    };

    getPlanet();
  }, [slug]);

  return (
    <div>
      <div className="container px-4 pt-4 bg-dark">
        <div className="d-flex align-items-baseline justify-content-around">
          <h2 className="text-left text-white d-inline">{planet?.name}</h2>
          <SuperAwesomeButton
            destination={planet?._id}
            distanceToEarth={planet?.earthDistance}
            planetName={planet?.name}
          />
        </div>
        <img
          className="mx-auto d-block img-fluid"
          src={`/images/${planet?.name}.jpg`}
          width="20px"
          alt={planet?.name}
          style={{
            width: "auto",
            height: "250px",
          }}
        />
        <div className="text-center py-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
          <div className="p-4">
            <div className="px-4">
              <h3>Temperature</h3>
              <p>{toCelsius(planet?.avgTemp)}°C</p>
              <h3>Distance</h3>
              <p>{numberWithSpaces(planet?.earthDistance)} km</p>
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
