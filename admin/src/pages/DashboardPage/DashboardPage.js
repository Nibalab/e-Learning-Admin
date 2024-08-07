import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css'; 

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Admin Dashboard</h1>
      <p className="dashboard-description">Select an action to manage:</p>
      <div className="actions-container">
        <Link to="/classes" className="action-box">
          <div className="action-content">
            <h3>Manage Classes</h3>
            <p>Create and organize class offerings.</p>
          </div>
        </Link>
        <Link to="/enrollments" className="action-box">
          <div className="action-content">
            <h3>Manage Enrollments</h3>
            <p>View and manage student enrollments.</p>
          </div>
        </Link>
        <Link to="/files" className="action-box">
          <div className="action-content">
            <h3>Manage Files</h3>
            <p>Upload and organize course materials.</p>
          </div>
        </Link>
        <Link to="/withdrawals" className="action-box">
          <div className="action-content">
            <h3>Manage Withdrawals</h3>
            <p>Approve or reject withdrawal requests.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
