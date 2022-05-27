import React, { useState } from "react";

export interface UserInfoInterface {
  firstName?: string;
  username?: string;
  email?: string;
  password?: string;
}
export interface PropsInterface {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SyntheticEvent, url: string) => void;
  state: UserInfoInterface;
}

const RegisterForm: React.FC<PropsInterface> = ({
  handleChange,
  handleSubmit,
  state,
}) => {
  return (
    <>
      <form
        className="w-50 m-auto"
        onSubmit={(e) => handleSubmit(e, "http://localhost:4000/register")}
      >
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
          <input className="btn btn-light" type="submit" value="Register" />
        </div>
      </form>
    </>
  );
};
export default RegisterForm;