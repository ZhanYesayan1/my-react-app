// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import { UserButton, UserProfile, SignOutButton} from "@clerk/clerk-react";

const Sidebar = ({onLogout}) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Book UpSelling</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/sales-report">Sales Report</Link>
        </li>
        <li>
          <Link to="/setting">Settings</Link>
        </li>
      </ul>
      <SignOutButton className="logout-button" />
    </div>
  );
};

export default Sidebar;
