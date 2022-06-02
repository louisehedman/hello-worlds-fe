import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import About from "./components/about/About";
import User from "./pages/User";
import BookedTrip from "./pages/BookedTrip";
import { PlanetPage } from './components/PlanetPage';
import BlogPage from "./pages/blogpage";
import Logout from "./components/logout/Logout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/user/:id' element={<User />} />
        <Route path='/booked-trip/:tripId' element={<BookedTrip />} />
        <Route path='/planet/:slug' element={<PlanetPage />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path='/planet/:slug' element={<PlanetPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
