import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../helpers/urls";
import { Link } from "react-router-dom";
import "./SearchPlanet.css";

// Search planet
const SearchPlanet: React.FC = () => {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch]: [string, (search: string) => void] = useState("");

  // String formatter
  const handleChange = (e: { target: { value: string } }) => {
    const formatString = e.target.value.toLowerCase();
    setSearch(formatString);
  };

  // Clear the input field
  const resetInputField = () => {
    setSearch("");
  };

  useEffect(() => {
    if (planets.length === 0) {
      try {
        axios.get(API_URL("planets")).then((response: any) => {
          setPlanets(response.data.planets);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="container planetContainer">
      <div className="row">
          <div className="planet-card">
            <div className="card-body">
              <ul className="list-unstyled">
              <input
                className="form-control me-2"
                type="text"
                value={search}
                placeholder="Search for a planet"
                onChange={handleChange}
              />
              {planets.map((planet: any) => {
                if (
                  planet.name.toLowerCase().startsWith(search) && search 
                ) {
                  return (
                    <div className="searchedPlanet">
                    <li key={planet.id}>
                      <h3>{planet.name}</h3>
                      <p>{planet.shortDescription}</p>
                      <Link to={"/planet/" + planet.name}>
                        <button onClick={resetInputField} className="p-1 mx-1 my-3 btn planet-btn btn-outline-success">
                          Find out more about planet
                        </button>
                      </Link>
                    </li>
                    </div>
                  );
                } else return null;
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SearchPlanet;
