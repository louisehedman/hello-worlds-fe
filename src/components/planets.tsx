import React from "react";
import "./planets.css";
import { planets } from "../helpers/planetArr";


function Planet() {
    

    return (
       <div className="planetContainer">
            {planets.map((planet: any) => {
            return (
                <div className="planet" style={{
                    backgroundImage: 'url('+planet.image+')'
                    }}>
                    
                    <div className="action">
                        <button>i</button>
                        <button>+</button>
                    </div>

                    <div className="bottom">
                        <h1>{planet.name}</h1>

                        <div className="info">
                            <p>Temperature: <span>XYZ °C</span></p>
                            <p>Distance: <span>{planet.distance}km</span></p>
                        </div>
                    </div>
                </div>
            )
        })
        }
        </div>
    )
}

function PlanetSlide() {
    return (
      <div className="container p-4">
          <h1 className="text-white">Our Planets</h1>
        <div className="card bg-black text-white rounded shadow-lg overflow-auto">
            <Planet />
        </div>
      </div>
    );
  }
  
  export default PlanetSlide;