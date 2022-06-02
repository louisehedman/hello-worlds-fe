import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { API_URL } from "../../reusable/urls";
import { useContext } from "../../App";

const Logout: React.FC = () => {
  
  const { userId, setUserId } = useContext();

  const navigate = useNavigate();
  
  useEffect(() => {
    if (userId) {
      localStorage.removeItem("userId");
      setUserId(undefined)
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