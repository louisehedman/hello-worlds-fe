import React, { useState, useEffect } from "react";
import axios from 'axios';

interface Props {
    planet: string;
    setPlanet: React.Dispatch<React.SetStateAction<PlanetInterface | undefined>>
}

interface PlanetInterface {
    _id: string | undefined;
    name: string | undefined;
    moons: Array<{id: number, moon: string}> | undefined;
    avgTemp: number | undefined;
    earthDistance: number | undefined;
    shortDescription: string | undefined;
  }
  
  export const PlanetPage = () => {
    const [planet, setPlanet] = useState<PlanetInterface>();

    const getPlanet = async () => {
         axios.get(`http://localhost:4000/planets/Mars`).then((res) => {
            setPlanet({
                _id: res.data.planet._id,
                name: res.data.planet.name,
                moons: res.data.planet.name,
                avgTemp: res.data.planet.avgTemp,
                earthDistance: res.data.planet.earthDistance,
                shortDescription: res.data.planet.shortDescription,
            });
            console.log(planet);

        })
    }
  
    useEffect(() => {
        getPlanet();
    }, [])
    
    return (
        <div>
        </div>
    ) }
