import React from "react";
import { Footer } from "./components/Footer";
import "./App.css";
import Login from "./components/Login";
import axios from "axios";

function App() {
  const logout = async () => {
    await fetch("http://localhost:4000/logout", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
