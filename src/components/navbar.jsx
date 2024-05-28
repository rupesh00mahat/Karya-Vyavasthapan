import React from "react";
import '../style/navbar.css';

function Navbar() {
  return <nav id="navbar-wrapper">
    <div className="navbar-title">
        <h2>My wordspace</h2>
    </div>
    <div className="navbar-content">
        <input type="text" placeholder="Search here..."/>
        <div className="navbar-sidebar">
            <button>Dark Mode</button>
            <button>Upgrade</button>
        </div>
    </div>
  </nav>;
}

export default Navbar;
