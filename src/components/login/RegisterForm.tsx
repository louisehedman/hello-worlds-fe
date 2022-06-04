import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { UserDetailsInterface } from "../../interfaces/interfaces";
import { API_URL } from "../../reusable/urls";

const RegisterForm: React.FC = () => {
  // References to input elements
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const pwdRef = useRef<HTMLInputElement | null>(null);
  // Reference to p displaying validation messages
  const messageRef = useRef<HTMLParagraphElement | null>(null);
  // Message variable
  const [message, setMessage] = useState("");
  // User input variable
  const [state, setState] = useState<UserDetailsInterface>({
    firstName: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
  });

  // Sets focus on the firstName field when component mounts
  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  // Handles changes in inputs and updates state on each keypress
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      /* Event targets use the same name as state object properties.
       * Sets the value of the current input to responding state property
       */
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent, url: string) => {
    // Prevents reloading of page on submit
    e.preventDefault();
    // Set message instead of default validation error from server
    if (state.password?.length) {
      if (state.password.length < 8) {
        // Refocus the password field
        if (pwdRef.current) {
          pwdRef.current.focus();
        }
        setState({ ...state, password: "" });
        return setMessage("Password must be at least 8 characters");
      }
    }
    try {
      const res = await axios.post(
        url,
        { ...state },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      setMessage(`Registration successful`);
    } catch (err: any) {
      // For special type of database duplicate key error for unique fields
      if (err.response.data.includes("E11000")) {
        setMessage("Account already registered with this email");
      } else {
        setMessage(err.response.data);
      }
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-white text-center">Register</h2>
      <p
        ref={messageRef}
        className="text-white text-center"
        style={!message ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        {message}
      </p>

      <form
        className="w-100 m-auto"
        onSubmit={(e) => handleSubmit(e, API_URL("register"))}
      >
        <div className="form-group">
          <label className="text-white">First name:</label>
          <input
            ref={firstNameRef}
            className="form-control my-3"
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            required
          />
          <label className="text-white">Username:</label>
          <input
            className="form-control my-3"
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            required
          />
          <label className="text-white">Email:</label>
          <input
            ref={emailRef}
            className="form-control my-3"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <label className="text-white">Password:</label>
          <input
            ref={pwdRef}
            className="form-control my-3"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          <input className="btn btn-light" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
