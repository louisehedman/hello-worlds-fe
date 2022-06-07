import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./components/about/About";
import User from "./pages/User";
import BookedTrip from "./pages/BookedTrip";
import { PlanetPage } from "./pages/PlanetPage";
import BlogPage from "./pages/Blogpage";
import Destinations from "./pages/Destinations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
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
