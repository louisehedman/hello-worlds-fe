import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PlanetInterface } from "../interfaces/interfaces";
import { API_URL } from "../reusable/urls";
import SuperAwesomeButton from "./SuperAwesomeButton";
import toCelsius from "../helpers/KelvinConverter";

export const PlanetPage = () => {
  const [planet, setPlanet] = useState<PlanetInterface>();
  let { slug } = useParams();

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

  const numberWithSpaces = (nr: number | undefined) => {
    return nr?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    getPlanet();
  }, [slug]);

  return (
    <div>
      <div className="container px-4 pt-4 rounded w-100 mb-4 px-4 pb-4 py-4">
        <div className="text-center mb-4 py-4 bg-black bg-opacity-80 border border-white rounded text-white">
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
            src={`${planet?.image}`}
            alt={`${planet?.name}`}
            width="20px"
            style={{
              width: "auto",
              height: "250px",
            }}
          />

          <h3 className="text-white text-muted">Average temperature</h3>
          <p className="text-white">{toCelsius(planet?.avgTemp)}°C</p>
          <h3 className="text-white text-muted">Distance from Earth</h3>
          <p className="text-white">
            {numberWithSpaces(planet?.earthDistance)} km
          </p>
        </div>
        <div className="container px-4 pb-4 py-4 text-left bg-black bg-opacity-75 border border-gray rounded text-white shadow-lg">
          <h3 className="text-center">Description</h3>
          <p>{planet?.description}</p>
        </div>
      </div>
    </div>
  );
};
