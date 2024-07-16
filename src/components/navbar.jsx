import React from "react";
import "../style/navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


function Navbar() {
  return (
    <nav id="navbar-wrapper">
      <div className="navbar-title">
        <h2>My workspace</h2>
      </div>
      <div className="navbar-content">
        <div className="navbar-input-wrapper">
          <CiSearch size={30} color="#4f525a" />

          <input type="text" placeholder="Search here..." />
        </div>
        <div className="navbar-sidebar">
          <button className="dark-mode-toggle">
            <MdDarkMode size={30} color="#6f737f"/>
          </button>
          <button className="upgrade-button">Create new task</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
