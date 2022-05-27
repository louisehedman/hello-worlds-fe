import axios from "axios";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { UserInfoInterface } from "./RegisterForm";

const Login: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [state, setState] = useState<UserInfoInterface>({});

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
      let res = await axios.post(url, userInfo);
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
    <div>
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
