// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardPage from './pages/DashboardPage';
import ClassesPage from './pages/ClassesPage';
import EnrollmentsPage from './pages/EnrollmentPage';
import FilesPage from './pages/FilesPage';
import WithdrawalsPage from './pages/WithdrawalsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { ProtectedRoute, PublicRoute } from './utils/routes';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Redirect root path to login if not authenticated */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/enrollments" element={<EnrollmentsPage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/withdrawals" element={<WithdrawalsPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
