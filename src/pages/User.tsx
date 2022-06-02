import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TripList from "../components/TripList";
import { API_URL, GET_USER } from "../reusable/urls";
import { UserInterface } from '../interfaces/interfaces'
import { useContext } from "../App";


const User: React.FC = () => {
  const [user, setUser] = useState<UserInterface>();

  const { userId, setUserId } = useContext();

  const navigate = useNavigate();


  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }

    fetch(API_URL(GET_USER(userId)), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.success) {
          setUser({
            _id: data.user._id,
            firstName: data.user.firstName,
            username: data.user.username,
            email: data.user.email,
            isAdmin: data.user.isAdmin,
            tripList: data.user.tripList,
          });
        }
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
