import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

type ContextType = {
  userId: string | undefined;
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function App() {
  const session = localStorage.getItem("userId");

  const [userId, setUserId] = useState<string | undefined>(session === null ? undefined : session);

  return (
    <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh"}}>
      <Header userId={userId}  />
      <Outlet context={{ userId, setUserId }} />
      <Footer />
    </div>
  );
}

export default App;

export function useContext() {
  return useOutletContext<ContextType>();
}
