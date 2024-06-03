import React from "react";
import { BsThreeDots } from "react-icons/bs";

function CategoryList() {
  return (
    <div className="list-section-wrapper">
      <div className="category-item">
        <div className="category-header">
          <span> To-do</span>
          <button className="add-new">+</button>
        </div>
        <div className="task-item">
          <div className="task-tags">
            <div className="tags">
              <span>UX Design</span>
              <span>Medium</span>
            </div>
            <button className="edit-task">
              <BsThreeDots size={15}/>
            </button>
          </div>
          <h3>Wireframe Landing Page</h3>
          <p>
            Creating a wireframe for a landing page that will highlight the main
            features of Product XYZ and encourage visit...
          </p>
          <span className="days-left">6 Days left</span>
          <div className="team-members"></div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
