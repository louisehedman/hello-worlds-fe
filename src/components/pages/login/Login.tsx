import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthProvider";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface Props {
  color: string;
}

const Login: React.FC<Props> = ({ color }) => {
  const auth = useContext(AuthContext);
  const [hasAccount, setHasAccount] = useState(true);
  const toggleForm = () => {
    setHasAccount(hasAccount ? false : true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.auth()) {
      navigate(-1);
    }
  });

  return (
    <div className={`container w-50 text-center ${color}`}>
      {hasAccount ? <LoginForm /> : <RegisterForm />}

      <p className="d-inline">
        {hasAccount ? "Don't have an account?" : "Already have an account?"}
      </p>
      <button
        className="btn btn-link d-inline align-baseline"
        onClick={toggleForm}
      >
        {hasAccount ? <button type="button" className="btn btn-warning">Register here</button> : <button type="button" className="btn btn-warning">Login here</button>}
      </button>
    </div>
  );
};

export default Login;
