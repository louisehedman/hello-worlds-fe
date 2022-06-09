import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import User from "./components/pages/user/User";
import BookedTrip from "./components/pages/BookedTrip";
import { PlanetPage } from "./components/pages/planetpage/PlanetPage";
import BlogPage from "./components/pages/blogpage";
import Destinations from "./components/pages/Destinations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login color={"text-white"} />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="destinations" element={<Destinations />}></Route>
        <Route path="/planet/:slug" element={<PlanetPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/booked-trip/:tripId" element={<BookedTrip />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
