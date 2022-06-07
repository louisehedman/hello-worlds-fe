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
        className="card rounded m-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.65)",
        }}
      >
        <img
          src={planet?.image}
          className="card-img-top rounded"
          alt={planet?.name}
          style={{ width: "16rem" }}
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{planet?.name}</h5>
          <p className="card-text text-dark d-inline">
            {trip.passengers} passengers
          </p>
          <p
            className="class-text text-dark d-inline"
            style={{ marginLeft: "auto" }}
          >
            {trip.firstClass ? "First class" : "Economy"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Trip;