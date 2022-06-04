import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "../App";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";

const Login: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const navigate = useNavigate();

  const { userId, setUserId } = useContext();

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, [userId]);

  const toggleForm = () => {
    setHasAccount(hasAccount ? false : true);
  };

  return (
    <div className="container w-50 text-center text-white">
      {hasAccount ? <LoginForm /> : <RegisterForm />}

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
