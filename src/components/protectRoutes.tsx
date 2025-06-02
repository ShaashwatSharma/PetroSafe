import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  // You can add more validation here (like expiry check)
//   return !!token;
return !token;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};
