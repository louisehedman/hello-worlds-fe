import axios from "axios";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [state, setState] = useState({
    firstName: "",
    username: "",
    email: "",
    password: "",
  });

  const [value, setValue] = useState("");

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

  const handleRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:4000/register", {
        firstName: state.firstName,
        username: state.username,
        email: state.email,
        password: state.password,
      });
      if (res.status === 200) {
        setValue(state.username);
      } else {
        setValue("Some error occured");
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
        <form className="w-50 m-auto" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <input type="submit" value="Register" />
          </div>
        </form>
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
