import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TripList from "./TripList";
import { API_URL } from "../../../helpers/urls";
import { UserInterface } from "../../../interfaces/Interfaces";
import { AuthContext } from "../../../auth/AuthProvider";
import axios from "axios";

const User: React.FC = () => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState<UserInterface>();

  const navigate = useNavigate();

  

  useEffect(() => {
    if (!auth?.auth()) {
      navigate("/");
    }

    const getUser = async () => {
      try {
        const res = await axios.get(API_URL("user"), {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
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

    getUser();
  }, [auth, navigate]);

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
