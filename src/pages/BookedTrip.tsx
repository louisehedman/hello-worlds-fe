import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { PlanetInterface, TripInterface } from '../interfaces/interfaces'
import { API_URL, GET_TRIP, GET_PLANET } from '../reusable/urls';


const BookedTrip: React.FC = () => {
  const { tripId } = useParams();
  const userId = localStorage.getItem("userId");

  const [trip, setTrip] = useState<TripInterface>();
  const [planet, setPlanet] = useState<PlanetInterface>();

  useEffect(() => {
    axios.get(API_URL(GET_TRIP(userId ? userId : "628b720f3496e31190e38a35", tripId)))
    .then((res) => {

      const data = res.data;

      setTrip({
        _id: data.trip._id,
        destination: data.trip.destination,
        travTime: data.trip.travTime,
        departure: data.trip.departure,
        firstClass: data.trip.firstClass,
        createdAt: data.trip.createdAt
      })

      getPlanet(data.trip.destination);

    })
  }, [])

  const getPlanet = (planetId: string) => {
    axios.get(API_URL(GET_PLANET(planetId)))
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
      })
  }

  return (
    <main className='container-sm'>
      <Link to={userId ? `/user/${userId}` : "/"}>Back to user page</Link>
      <h1 className='text-white'>Trip to {planet?.name}</h1>
      <section className='container-sm rounded' style={{backgroundColor: "rgba(255, 255, 255, 0.65)"}}>
        <h2>{planet?.name} specs</h2>
        <img className='rounded' src={planet?.image} alt={planet?.name} style={{width: "20rem"}}/>  
        <p className='fs-5'>Number of moons: <span className='fw-semibold'>{planet?.moons?.length}</span></p>
        <p className='fs-5'>Average Temperature: <span className='fw-semibold'>{planet?.avgTemp}</span></p>
        <p className='fs-5'>Mass: <span className='fw-semibold'>{planet?.mass.massValue}</span></p>
        <p className='fs-5'>Gravity: <span className='fw-semibold'>{planet?.grav}</span></p>
        <p className='fs-5'>Radius: <span className='fw-semibold'>{planet?.radius}</span></p>
        <p className='fs-5'>Distance to earth: <span className='fw-semibold'>{planet?.earthDistance}</span></p>
        <p className='fs-5'>{planet?.shortDescription}</p>
      </section>
      <section className='container-sm rounded' style={{backgroundColor: "rgba(255, 255, 255, 0.65)"}}>
        <h2>Booking specs</h2>
        <p className='fs-5'>Departure: <span className='fw-semibold'>{trip?.departure}</span></p>
        <p className='fs-5'>Travel time: <span className='fw-semibold'>{trip?.travTime}</span></p>
        <p className='fs-5'>Convenience: <span className='fw-semibold'>{trip?.firstClass ? "First class" : "Economy"}</span></p>
      </section>
    </main>
  )
}

export default BookedTrip;