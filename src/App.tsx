import React from "react";
import "./App.css";
import User from "./pages/User";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <User />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
