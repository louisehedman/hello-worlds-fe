import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import About from "./components/about/About";
import User from "./pages/User";
import BookedTrip from "./pages/BookedTrip";
import { PlanetPage } from './components/PlanetPage';
import BlogPage from "./pages/blogpage";
import AdvancedSearch from "./components/AdvancedSearch";

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
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="blogs/:id" element={<BlogPage />}></Route>
      </Route>
      <Route path="advanced-search" element={<AdvancedSearch />}></Route>
      <Route path='/planet/:slug' element={<PlanetPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
