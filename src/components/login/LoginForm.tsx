import axios from "axios";
import React from "react";
import { PropsInterface } from "./RegisterForm";

const LoginForm: React.FC<PropsInterface> = ({
  handleSubmit,
  handleChange,
  state,
}) => {
  return (
    <>
      <form
        className="w-50 m-auto"
        onSubmit={(e) => handleSubmit(e, "http://localhost:4000/login")}
      >
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            value={state.email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
          <input className="btn btn-light" type="submit" value="Login" />
        </div>
      </form>
    </>
  );
};
export default LoginForm;
