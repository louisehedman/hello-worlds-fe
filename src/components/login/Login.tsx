import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { UserDetailsInterface } from "../../interfaces/interfaces";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useContext } from "../../App";

const Login: React.FC = () => {

  const [hasAccount, setHasAccount] = useState(true);
  const [state, setState] = useState<UserDetailsInterface>({
    firstName: undefined,
    username: undefined,
    email: undefined,
    password: undefined
  });

  const navigate = useNavigate();

  const { userId, setUserId } = useContext();

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, [userId]);

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
      const userInfo = state;
      
      const res = await axios.post(url, userInfo, {method: 'POST', headers: {'Content-Type': 'application/json'}, withCredentials: true});
      console.log("res: ", res);
      if (res.status === 200) {
        if (res.data._id) {
          setUserId(res.data._id);
          localStorage.setItem("userId", res.data._id);
          navigate("/");
        } else {
          setHasAccount(!hasAccount);
        }
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
