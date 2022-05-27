import axios from "axios";
import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { UserInfoInterface } from "./RegisterForm";

const Login: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [state, setState] = useState<UserInfoInterface>({});

  const handleSubmit = (e: React.SyntheticEvent) => {
    alert("A name was submitted: " + state);
    e.preventDefault();
    toggleForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleRegister = async (e: React.SyntheticEvent, url: string) => {
    e.preventDefault();
    try {
      let userInfo = state;
      let res = await axios.post(url, userInfo);
      if (res.status === 200) {
        console.log(state.username);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleForm = () => {
    setHasAccount(hasAccount === true ? false : true);
  };

  if (hasAccount === true)
    return (
      <div>
        <form className="w-50 m-auto" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" type="email" />
            <label>Password:</label>
            <input className="form-control" type="password" />
            <input className="btn" type="submit" value="Login" />
          </div>
        </form>
        <p className="d-inline">Don't have an account?</p>
        <button
          className="btn btn-link d-inline align-baseline"
          onClick={toggleForm}
        >
          Register here
        </button>
      </div>
    );
  else {
    return (
      <div>
        <RegisterForm
          handleChange={handleChange}
          handleRegister={handleRegister}
          state={state}
          setState={setState}
        />
        <p className="d-inline">Already have an account?</p>
        <button
          className="btn btn-link d-inline align-baseline"
          onClick={toggleForm}
        >
          Login here
        </button>
      </div>
    );
  }
};

export default Login;
