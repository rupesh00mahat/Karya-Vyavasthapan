import React from "react";
import "../style/sidebar.css";
import { IoIosArrowUp } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

function Sidebar() {
  return (
    <div id="sidebar-wrapper">
      <div id="project-sidebar">
        <div className="project-header">
          <div className="project-title">
            <h3>Project</h3>
            <span>5</span>
          </div>

          <IoIosArrowUp />
        </div>
        <div className="project-content">
          <ul className="project-content-list">
            <li className="project-content-item">
              <h5>Shopavvy</h5>
              <span>
                <BsThreeDotsVertical size={20} color="#4f525a" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div id="member-sidebar">
        <div className="member-header">
          <div className="member-title">
            <h3>Member</h3>
            <span>5</span>
          </div>

          <IoIosArrowUp />
        </div>
        <div className="member-content">
          <ul className="member-content-list">
            <li className="member-content-item">
              <img/>
              <div className='member-info'>
                  <p>Jaylon Vaccaro</p>
                  <span>2 project</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
