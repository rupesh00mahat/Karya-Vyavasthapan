import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";



function Navbar() {
    const [task, setTask]= useState([]);

  console.log(task);

  const addNewTask = () =>{
    let newTaskTitle = prompt('Enter your task' );
    let newTaskDescription = prompt('Enter your description');
      setTask(task=> [...task, {title: newTaskTitle, description: newTaskDescription}])
  }

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
          <button 
          onClick={addNewTask}
          className="upgrade-button">Create new task</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
