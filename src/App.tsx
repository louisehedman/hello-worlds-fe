import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import AuthProvider from "./auth/AuthProvider";

type ContextType = {
  userId: string | undefined;
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

function App() {
  const session = localStorage.getItem("userId");

  const [userId, setUserId] = useState<string | undefined>(
    session === null ? undefined : session
  );

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
        <Header userId={userId} />
        <Outlet context={{ userId, setUserId }} />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

export function useContext() {
  return useOutletContext<ContextType>();
}
