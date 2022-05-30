import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL, GET_PLANET } from "../reusable/urls";
import { TripInterface, PlanetInterface } from '../interfaces/interfaces'

interface Props {
  trip: TripInterface;
}

const Trip: React.FC<Props> = ({ trip }) => {
  const [planet, setPlanet ] = useState<PlanetInterface>();

  useEffect(() => {
    if (trip) {
      axios.get(API_URL(GET_PLANET(trip.destination)))
        .then((res) => {

          const data = res.data;
          console.log(data);

          setPlanet({
            _id: data.planet._id,
            name: data.planet.name,
            moons: data.planet.moons,
            avgTemp: data.planet.avgTemp,
            mass: data.planet.mass,
            grav: data.planet.grav,
            radius: data.planet.radius,
            earthDistance: data.planet.earthDistance,
            shortDescription: data.planet.shortDescription,
            image: data.planet.image
          })

          console.log(planet)

        })
      
    }
  }, [])

  return (
    <div>
      <p>{planet?.name}</p>
      <p>{trip.departure}</p>
      <p>{trip.firstClass ? "First class" : "Economy"}</p>
    </div>
  )
}

export default Trip;