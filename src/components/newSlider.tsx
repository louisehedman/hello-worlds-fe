import React from "react";
import { Carousel } from "react-bootstrap";
import { planets } from "../helpers/planetArr";

const HeroSlider = (props: any) => {

    const planets = props.planets;
    
    return (
        <div className="container px-4 pt-4">
            <h2 className="text-white">Our Planets</h2>
        <Carousel className="bg-black rounded w-100 mb-4 border border-white">
        {planets.map((planet: any, index: any) => {
            return (
                <Carousel.Item key={index} interval={5000}>
                    <img
                    src={planet.image}
                    alt={"slide" + index}
                    width="10px"
                    style={{ 
                        width: "auto",
                        height: "200px"
                    }}
                    />
                        
                     
                        <Carousel.Caption>
                            <h3 >{planet.name}</h3>
                            <p className="text-white">
                                <span
                                className="text-light">Average Temperature: </span>{planet.avgTemp}°C</p>
                        </Carousel.Caption>
                    
                    
                </Carousel.Item>
            )
        })}
        </Carousel>
        </div>
    )
  
};

export default HeroSlider;
