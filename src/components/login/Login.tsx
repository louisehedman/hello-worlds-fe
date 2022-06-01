import axios from "axios";
import React, { useState } from "react";
import { UserDetailsInterface } from "../../interfaces/interfaces";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { API_URL } from "../../reusable/urls";

const Login: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [state, setState] = useState<UserDetailsInterface>({});

  const logout = async () => {
    try {
    let res = await axios.post(API_URL("logout"), {"body": "empty"}, {
      method: "POST", headers: {'Content-Type': 'application/json'}, withCredentials: true 
    });
    console.log("res: ", res);
    if (res.status === 200) {
      console.log(res);
    } else {
      console.log("Some error occured");
    }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent, url: string) => {
    e.preventDefault();
    try {
      let userInfo = state;
      console.log("userinfo: ", userInfo);
      let res = await axios.post(url, userInfo, {method: 'POST', headers: {'Content-Type': 'application/json'}, withCredentials: true});
      console.log("res: ", res);
      if (res.status === 200) {
        console.log(res);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleForm = () => {
    setHasAccount(hasAccount ? false : true);
    setState({
      ...state,
      password: "",
    });
  };

  return (
    <div className="container w-50 text-center text-white">
      <button onClick={logout}>Logout</button>
      {hasAccount ? (
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          state={state}
        />
      ) : (
        <RegisterForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          state={state}
        />
      )}

      <p className="d-inline">
        {hasAccount ? "Don't have an account?" : "Already have an account?"}
      </p>
      <button
        className="btn btn-link d-inline align-baseline"
        onClick={toggleForm}
      >
        {hasAccount ? "Register here" : "Login here"}
      </button>
    </div>
  );
};

export default Login;
