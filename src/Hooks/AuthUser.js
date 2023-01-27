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
    const userString = localStorage.getItem("phone");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const getUserRole = () => {
    const roleString = localStorage.getItem("role");
    const role_name = JSON.parse(roleString);
    return role_name;
  };
  const getUserInfo = () => {
    const userInfoString = localStorage.getItem("user_info");
    const user_info = JSON.parse(userInfoString);
    return user_info;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  const [userRole, setUserRole] = useState(getUserRole());
  const [phone, setPhone] = useState(getUser());
  const [userInfo, setUserInfo] = useState(getUserInfo());

  // console.log("userRole", userRole);

  const saveToken = (phone, access, role, userInfo) => {
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("role", JSON.stringify(role));
    localStorage.setItem("user_info", JSON.stringify(userInfo));

    setPhone(phone);
    setToken(token);
    setUserInfo(userInfo);
    setUser(user);
    setUserRole(userRole);
    navigate("/");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const http = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    setToken: saveToken,
    token,
    userRole,
    getToken,
    http,
    phone,
    getUserInfo,
    userInfo,
    logout,
  };
}
