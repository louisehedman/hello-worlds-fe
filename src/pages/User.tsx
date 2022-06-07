import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TripList from "../components/user/TripList";
import { API_URL } from "../reusable/urls";
import { UserInterface } from "../interfaces/interfaces";
import { AuthContext } from "../auth/AuthProvider";

const User: React.FC = () => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState<UserInterface>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.auth()) {
      navigate("/");
    }

    fetch(API_URL("user"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
      });
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
