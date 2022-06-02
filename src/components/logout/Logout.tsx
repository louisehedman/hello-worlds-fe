import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../reusable/urls";

const Logout: React.FC = () => {
  const session = localStorage.getItem("userId");
  const navigate = useNavigate();
  
  useEffect(() => {
    if (session !== null) {
      localStorage.removeItem("userId");
    }

    try {
      fetch(API_URL("logout"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        credentials: 'include'
      })
      .then((res => res.json()))
      .then((data) => {
        if (data.success) {
          navigate("/");
        }
      })
      
    } catch (err) {
        console.log(err);
    }
  }, [])
  return (
    <>
    </>
  )
}

export default Logout;