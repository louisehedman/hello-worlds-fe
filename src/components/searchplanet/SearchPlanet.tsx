import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlanetInterface } from "../../interfaces/interfaces";

import "./SearchPlanet.css";

const SearchPlanet: React.FC = () => {
  const [planets, setPlanets] = useState<PlanetInterface>([]);
  const [search, setSearch]: [string, (search: string) => void] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // async function fetchPlanet() {
    // const result = await axios.get('https://localhost:4000/planets/jupiter');
    // console.log(result)

    axios
      .get("http://localhost:4000/planets/6297f2dc62bd76efb826bd44")
      .then((res) => {
        const data = res.data;

        console.log(data);

        setPlanets({
          _id: data.planet._id,
          name: data.planet.name,
          moons: data.planet.moons,
          avgTemp: data.planet.avgTemp,
          mass: {
            massValue: data.planet.massValue,
            massExponent: data.planet.massExponent,
          },
          grav: data.planet.grav,
          radius: data.planet.radius,
          earthDistance: data.planet.earthDistance,
          description: data.planet.description,
          shortDescription: data.planet.shortDescription,
          image: data.planet.image,
        });

        localStorage.setItem("planetId", data.planet._id);
      });
    // }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Planets API</h1>
        </div>
        <div className="col-6 searchPlanet">
          <div className="card">
            <div className="card-header">Search for a planet</div>
            <div className="card-body">

              <ul>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {planets.map((planet: any) => {
                if (
                  search == "" ||
                  planet.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return (
                    <li key={planet.id}>
                      <h3>{planet.id}</h3>
                      <p>{planet.name}</p>
                      <p>{planet.description}</p>
                    </li>
                  );
                }
                return null;
              })}
              </ul>
            </div>
          </div>

          <div>
            <button className="btn btn-warning btn-lg">Search</button>
          </div>
        </div>
      </div>

      <h2 className="subTitle">Here is the Planet</h2>
      <h4>Planet info</h4>
    </div>
  );
};

export default SearchPlanet;
