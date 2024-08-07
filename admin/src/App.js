import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ClassesPage from './pages/ClassPage/ClassesPage';
import EnrollmentsPage from './pages/EnrollmentPage/EnrollmentPage';
import FilesPage from './pages/FilesPage/FilesPage';
import WithdrawalsPage from './pages/WithdrawalsPage/WithdrawalsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { ProtectedRoute, PublicRoute } from './utils/routes';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          
          <Route path="/" element={<Navigate to="/login" />} />

          
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
