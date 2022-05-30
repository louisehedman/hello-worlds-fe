import React, { useEffect, useState } from "react";
import axios from 'axios';

import TripList from "../components/TripList";
import { API_URL, GET_USER } from "../reusable/urls";
import { UserInterface } from '../interfaces/interfaces'

const User: React.FC = () => {
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    axios.get(API_URL(GET_USER("628b720f3496e31190e38a35")))
      .then((res) => {

        const data = res.data;

        setUser({
          _id: data.user._id,
          firstName: data.user.firstName,
          username: data.user.username,
          email: data.user.email,
          isAdmin: data.user.isAdmin,
          tripList: data.user.tripList,
        });
      });
  }, []);
  return (
    <main>
      <section>
        <p>{user?.firstName}</p>
      </section>
      <TripList tripList={user?.tripList}/>
      
    </main>
  );
};

export default User;
