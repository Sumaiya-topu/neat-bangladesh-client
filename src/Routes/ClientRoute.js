import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthUser from "../Hooks/AuthUser";

const ClientRoute = ({ children }) => {
  const location = useLocation();
  const { userRole, token } = AuthUser();

  if (userRole !== "user") {
    // logout()
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default ClientRoute;
