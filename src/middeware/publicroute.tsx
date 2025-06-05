import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./isauthenticated";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const PublicRoute : React.FC<ProtectedRouteProps> = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default PublicRoute;
