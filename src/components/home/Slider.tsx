import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import { Link } from "react-router-dom";
import axios from "axios";

// AUTH, USERID AND ADDPLANET() ARE ONLY TEMPORARY

const PlanetSlider = (props: any) => {
  const planets = props.planets;
  const auth = 1;
  const userId = 1;

  function numberWithSpaces(nr: number) {
    return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // if user is logged in and there is a user id, att planet to list
  const addPlanet = async (planet: string) => {
    if (auth && userId) {
      return axios
        .patch(`http://localhost:4000/create-trip/${userId}`, {
          destination: planet,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
                src={planet.image}
                alt={"slide" + index}
                width="10px"
                style={{
                  width: "auto",
                  height: "250px",
                }}
              />

              <Carousel.Caption>
                <h3>{planet.name}</h3>
                <div className="d-flex justify-content-center">
                  {auth && (
                    <button
                      onClick={() => addPlanet(planet.name)}
                      className="p-1 mx-1 my-3 btn btn-outline-success"
                    >
                      add +
                    </button>
                  )}
                  <Link to={"/planet/" + planet.name.toLowerCase()}>
                    <button className="p-1 mx-1 my-3 btn btn-outline-light">
                      read more
                    </button>
                  </Link>
                </div>
                <p className="text-white">
                  <span className="text-muted">Average Temperature: </span>
                  {planet.avgTemp}°C
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