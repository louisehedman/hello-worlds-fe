import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Footer } from "./components/Footer";
import Login from "./components/Login";
import TripBlog from "./components/blog/tripblog";
import PlanetSlider from "./components/slider";

function App() {
  const [planets, setPlanets] = useState(null);

  const logout = async () => {
    await fetch("http://localhost:4000/logout", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    if (!planets) {
      try {
        axios.get(`http://localhost:4000/planets`).then((response: any) => {
          console.log(response);
          setPlanets(response.data.planets);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
      <Login />
      {planets && <PlanetSlider planets={planets} />}
      <TripBlog />
      <Footer />
    </div>
  );
}

export default App;
