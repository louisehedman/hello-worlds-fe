import axios from "axios";
import React, { useState } from "react";

const RegisterForm: React.FC = () => {
  // State
  // Value

  //Parent state
  //
  return (
    <>
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
    </>
  );
};
export default RegisterForm;
