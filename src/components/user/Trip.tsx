import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API_URL, GET_PLANET } from "../../reusable/urls";
import { TripInterface, PlanetInterface } from "../../interfaces/interfaces";

interface Props {
  trip: TripInterface;
}

const Trip: React.FC<Props> = ({ trip }) => {
  const [planet, setPlanet] = useState<PlanetInterface>();

  useEffect(() => {
    if (trip) {
      fetch(API_URL(GET_PLANET(trip.destination)), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
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
            description: data.planet.description,
            image: data.planet.image,
          });
        });
    }
  }, []);

  return (
    <Link to={`/booked-trip/${trip?._id}`}>
      <div
        className="card rounded text-center p-1 m-3 align-items-center bg-black bg-opacity-75 text-white"
        style={{
          height: "400px",
          width: "auto",
        }}
      >
        <img
          src={planet?.image}
          className="card-img-top rounded"
          alt={planet?.name}
          style={{ width: "16rem" }}
        />
        <div className="card-body">
          <h3 className="card-title text-warning">{planet?.name}</h3>
          <ul className="list-unstyled">
            <li className="h4">{trip.passengers} passengers</li>
            <li className="h4">
              {trip.firstClass ? "First class" : "Economy"}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Trip;
