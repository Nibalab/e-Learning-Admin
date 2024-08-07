// src/utils/routes.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Protected route component that redirects unauthenticated users to the login page
export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Log authentication state to check if it causes the loop
  console.log("ProtectedRoute: isAuthenticated =", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// Public route component that redirects authenticated users to the dashboard
export const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Log authentication state to check if it causes the loop
  console.log("PublicRoute: isAuthenticated =", isAuthenticated);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};
