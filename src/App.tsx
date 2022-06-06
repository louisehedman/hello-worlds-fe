import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
