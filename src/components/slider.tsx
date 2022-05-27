import React from "react";
import { Carousel } from "react-bootstrap";
import { planets } from "../helpers/planetArr";
import './slider.css';


const PlanetSlider = (props: any) => {
  const planets = props.planets;

  function numberWithSpaces(nr: number) {
    return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div className="container px-4 pt-4">
      <h2 className="text-center text-white">Our Planets</h2>
      <Carousel className="bg-black rounded w-100 mb-4 border border-white">
        {planets.map((planet: any, index: any) => {
          return (
            <Carousel.Item className="text-center pt-4 carousel" key={index} interval={5000}>
              <img
                src={planet.image}
                alt={"slide" + index}
                width="10px"
                style={{
                  width: "auto",
                  height: "250px"
                }}
              />
            

            <Carousel.Caption>
                <h3>{planet.name}</h3>
                <div className="d-flex justify-content-center">
                    <button className="p-1 mx-1 my-3 btn btn-outline-success">add +</button>
                    <button className="p-1 mx-1 my-3 btn btn-outline-light">read more</button>
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
