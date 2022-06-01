import React from "react";
import { Props } from "./RegisterForm";
import { API_URL } from "../../reusable/urls";

const LoginForm: React.FC<Props> = ({ handleSubmit, handleChange, state }) => {
  return (
    <>
      <form
        className="w-50 m-auto"
        onSubmit={(e) => handleSubmit(e, API_URL("login"))}
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
