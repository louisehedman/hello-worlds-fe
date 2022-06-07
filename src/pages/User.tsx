import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TripList from "../components/TripList";
import { API_URL } from "../reusable/urls";
import { UserInterface } from "../interfaces/interfaces";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";

const User: React.FC = () => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState<UserInterface>();

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.get(API_URL("user"));
      setUser({
        _id: res.data.user._id,
        firstName: res.data.user.firstName,
        username: res.data.user.username,
        email: res.data.user.email,
        isAdmin: res.data.user.isAdmin,
        tripList: res.data.user.tripList,
      });
    } catch (err: any) {
      if (err.response.status === 403) {
        auth?.handleLogout();
        navigate("/login");
      } else {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    if (!auth?.auth()) {
      navigate("/");
    }
    getUser();
  }, []);

  return (
    <main className="container d-flex flex-column align-items-center text-white">
      <section>
        <h1 className="my-3">Hi {user?.firstName}!</h1>
      </section>
      <TripList tripList={user?.tripList} />
    </main>
  );
};

export default User;
