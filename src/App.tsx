import React from "react";
import logo from "./logo.svg";
import { Footer } from "./components/Footer";
import "./App.css";
import { PlanetPage } from "./components/PlanetPage";

function App() {
  return (
    <div className="App">
      <PlanetPage />
      <Footer />
    </div>
  );
}

export default App;
