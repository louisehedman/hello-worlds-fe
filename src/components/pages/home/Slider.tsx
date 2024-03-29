import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../helpers/urls";
import toCelsius from "../../../helpers/KelvinConverter";

// AUTH, USERID AND ADDPLANET() ARE ONLY TEMPORARY

const PlanetSlider = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        await axios.get(API_URL("planets")).then((response: any) => {
          setPlanets(response.data.planets);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlanets();
  }, []);

  function numberWithSpaces(nr: number) {
    return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  
  return (
    <div className="container px-4 pt-4">
      <h2 className="text-center text-white">Our Planets</h2>
      <Carousel className="bg-black rounded w-100 mb-4 border border-white">
        {planets.map((planet: any, index: any) => {
          return (
            <Carousel.Item
              className="text-center pt-4 carousel"
              key={index}
              interval={5000}
            >
              <img
                className="img-fluid"
                src={`/images/${planet.name}.jpg`}
                alt={"slide" + index}
                width="10px"
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />

              <Carousel.Caption>
                <h3>{planet.name}</h3>
                <div className="d-flex justify-content-center">
                  {/* {auth && (
                    <button
                      onClick={() => addPlanet(planet.name)}
                      className="p-1 mx-1 my-3 btn btn-outline-success"
                    >
                      add +
                    </button>
                  )} */}
                  <Link to={"/planet/" + planet.name}>
                    <button className="p-1 mx-1 my-3 btn btn-outline-light">
                      read more
                    </button>
                  </Link>
                </div>
                <p className="text-white">
                  <span className="text-muted">Average Temperature: </span>
                  {toCelsius(planet.avgTemp)}°C
                </p>
                <p className="textwhite">
                  <span className="text-muted">Distance from Earth: </span>
                  {numberWithSpaces(planet.earthDistance)} km
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PlanetSlider;
