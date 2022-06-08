import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { PlanetInterface, TripInterface } from "../interfaces/interfaces";
import { API_URL, GET_TRIP, GET_PLANET } from "../reusable/urls";
import { AuthContext } from "../auth/AuthProvider";
import toCelsius from "../helpers/KelvinConverter";


const BookedTrip: React.FC = () => {
  const auth = useContext(AuthContext);
  const { tripId } = useParams();

  // const { userId, setUserId } = useContext();

  const [trip, setTrip] = useState<TripInterface>();
  const [planet, setPlanet] = useState<PlanetInterface>();

  useEffect(() => {
    fetch(API_URL(GET_TRIP(tripId)), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTrip({
            _id: data.trip._id,
            destination: data.trip.destination,
            travTime: data.trip.travTime,
            passengers: data.trip.passengers,
            seat: data.trip.seat,
            firstClass: data.trip.firstClass,
            createdAt: data.trip.createdAt,
          });

          getPlanet(data.trip.destination);
        }
      });
  }, []);

  const getPlanet = (planetId: string) => {
    axios.get(API_URL(GET_PLANET(planetId))).then((res) => {
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
        description: data.planet.description,
      });
    });
  };

  return (
    <main className="container-sm">
      <div className="float-end h3">
        <Link to={auth?.signedIn ? `/user` : "/"}>Back to user page</Link>
      </div>
      <h1 className="text-center text-white mt-5 mb-3">Trip to {planet?.name}</h1>
      <section className="container-sm rounded text-center bg-black bg-opacity-75 text-white">
        <h2 className="text-warning pt-2">{planet?.name} specs</h2>
        <img
          className="rounded img-fluid"
          src={`/images/${planet?.name}.jpg`}
          alt={planet?.name}
          style={{ width: "20rem" }}
        />
        <ul className="list-unstyled pb-3">
          <li className="fs-5 my-1">
            Number of moons: {" "}
            <span className="fw-semibold">
              {planet?.moons === null ? 0 : planet?.moons?.length}
            </span>
          </li>
          <li className="fs-5 my-1">
            Average Temperature: {" "}
            <span className="fw-semibold">{toCelsius(planet?.avgTemp)} °C</span>
          </li>
          <li className="fs-5 my-1">
            Mass: <span className="fw-semibold">{planet?.mass.massValue}</span>
          </li>
          <li className="fs-5 my-1">
            Gravity: <span className="fw-semibold">{planet?.grav}</span>
          </li>
          <li className="fs-5 my-1">
            Radius: <span className="fw-semibold">{planet?.radius}</span>
          </li>
          <li className="fs-5 my-1">
            Distance to earth: {" "}
            <span className="fw-semibold">{planet?.earthDistance} km</span>
          </li>
          <li className="fs-5 my-1">{planet?.shortDescription}</li>
        </ul>
      </section>
      <section className="container-sm rounded text-center bg-black bg-opacity-75 text-white">
        <h2 className="text-warning pt-2">Booking specs</h2>
        <ul className="list-unstyled pb-3">
          <li className="fs-5 my-1">
            Class: {" "}
            <span className="fw-semibold">
              {trip?.firstClass ? "First class" : "Economy"}
            </span>
          </li>
          <li className="fs-5 my-1">
            Number of passengers: {" "}
            <span className="fw-semibold">{trip?.passengers}</span>
          </li>
          <li className="fs-5 my-1">
            Seating preference: {" "}
            <span className="fw-semibold">{trip?.seat}</span>
          </li>
          <li className="fs-5 my-1">
            Travel time: {" "}
            <span className="fw-semibold">{trip?.travTime} days</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default BookedTrip;
