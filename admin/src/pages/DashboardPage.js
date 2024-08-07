// src/pages/DashboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <p>Select an action to manage:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/classes" style={linkStyle}>
          Manage Classes
        </Link>
        <Link to="/enrollments" style={linkStyle}>
          Manage Enrollments
        </Link>
        <Link to="/files" style={linkStyle}>
          Manage Files
        </Link>
        <Link to="/withdrawals" style={linkStyle}>
          Manage Withdrawals
        </Link>
      </div>
    </div>
  );
};

const linkStyle = {
  display: 'block',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  textDecoration: 'none',
};

export default DashboardPage;
