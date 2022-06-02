import React, { useEffect, useState } from "react";
import axios from 'axios';

import TripList from "../components/TripList";
import { API_URL, GET_USER } from "../reusable/urls";
import { UserInterface } from '../interfaces/interfaces'
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const [user, setUser] = useState<UserInterface>();

  const session = localStorage.getItem("userId");

  const navigate = useNavigate();


  useEffect(() => {
    if (session === null || session === "") {
      navigate("/login");
    }

    fetch(API_URL(GET_USER(session !== null ? JSON.parse(session) : null)), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        
        setUser({
          _id: data.user._id,
          firstName: data.user.firstName,
          username: data.user.username,
          email: data.user.email,
          isAdmin: data.user.isAdmin,
          tripList: data.user.tripList,
        });
      })
  
  }, []);

  return (
    <main className="d-flex flex-column align-items-center text-white">
      <section>
        <h1>{user?.firstName}</h1>
      </section>
      <TripList tripList={user?.tripList}/>
    </main>
  );
};

export default User;
