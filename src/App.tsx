import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* NAVBAR GOES HERE */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
