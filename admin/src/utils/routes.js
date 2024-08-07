import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("ProtectedRoute: isAuthenticated =", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("PublicRoute: isAuthenticated =", isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};
