import React from 'react';
import { FaUser, FaProductHunt, FaBlog, FaSignInAlt, FaRegFileAlt, FaTachometerAlt } from 'react-icons/fa';
import './Sidebar.css'; // Import CSS for styling
import logo from './components/logo.jpg';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={logo} alt="User Profile" className="profile-img" />
        <h4>Admin Panel</h4>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <FaTachometerAlt className="icon" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FaUser className="icon" /> User
          </a>
        </li>
        <li>
          <a href="#">
            <FaProductHunt className="icon" /> Product
          </a>
        </li>
        <li>
          <a href="#">
            <FaBlog className="icon" /> Blog
          </a>
        </li>
        <li>
          <a href="#">
            <FaSignInAlt className="icon" /> Login
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegFileAlt className="icon" /> Not Found
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
