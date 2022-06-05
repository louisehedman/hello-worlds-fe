import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { UserDetailsInterface } from "../../interfaces/interfaces";
import { API_URL } from "../../reusable/urls";

const LoginForm: React.FC = () => {
  // Use the variables and functions from the AuthContext
  const auth = useContext(AuthContext);
  // References to input elements
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

  // Sets focus on the email field when component mounts
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  // Clears the error message when correcting email
  useEffect(() => {
    setMessage("");
  }, [state.email]);

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
      // Clears the password field on submit
      setState({ ...state, password: "" });
      auth?.handleLogin(res.data.user);
      setMessage(`Welcome ${res.data.user}`);
    } catch (err: any) {
      // If password is invalid
      if (err.response.status === 401) {
        if (pwdRef.current) {
          // Clear the password field and refocus password input
          setState({ ...state, password: "" });
          pwdRef.current.focus();
        }
      }
      // If email is invalid
      else if (emailRef.current) {
        // Clear the password field and focus email input
        setState({ ...state, password: "" });
        emailRef.current.focus();
      }
      // Set message to error response message
      setMessage(err.response.data);
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-white text-center">Sign in</h2>
      <p
        ref={messageRef}
        className="text-white text-center"
        style={!message ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        {message}
      </p>

      <form
        className="w-100 m-auto"
        onSubmit={(e) => handleSubmit(e, API_URL("login"))}
      >
        <div className="form-group">
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
          <input className="btn btn-light" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
