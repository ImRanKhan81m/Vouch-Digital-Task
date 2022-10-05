import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = localStorage.getItem("access");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = localStorage.getItem("email");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  const [email, setEmail] = useState(getUser());

  // console.log("userRole", userRole);
  
  const saveToken = (email, access, role) => {
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("role", JSON.stringify(role));
    
    setEmail(email);
    setToken(token);
    setUser(user);
    navigate("/");
  };


  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const http = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  
  return {
    setToken: saveToken,
    getToken,
    http,
    logout,
  };
}