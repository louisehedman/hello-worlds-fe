import React from "react";
import logo from "./logo.svg";
import Footer from "./components/Footer";
import "./App.css";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <User />
      <Footer />
    </div>
  );
}

export default App;
