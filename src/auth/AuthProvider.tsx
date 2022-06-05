import { createContext, useState } from "react";
import { API_URL } from "../reusable/urls";

// Context interface
interface AuthContextInterface {
  signedIn: boolean | undefined;
  //   setSignedIn: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  userName: string | undefined;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: (parameter: string) => void;
  handleLogout: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider = ({ children }: any) => {
  // Define all variables and functions to be passed down to children
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (username: string) => {
    setSignedIn(true);
    setUserName(username);
  };

  const handleLogout = async () => {
    try {
      await fetch(API_URL("logout"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then(() => {
          setSignedIn(false);
          setUserName("");
        });
    } catch (err) {
      console.log(err);
    }
  };

  // Gathers them in a variable we can pass as a value to the children
  const provider = {
    signedIn,
    userName,
    setUserName,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
