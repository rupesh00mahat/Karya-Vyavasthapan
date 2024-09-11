import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import '../style/list.css';

function Tasks() {
  const { state } = useContext(TaskContext);
  return <ul>{
    state.tasks && state.tasks.map(({task,category, label}, index)=>{
        return <li key={`${task}-${index}`} className="task-item">
            
            <div>{task}</div>
            <div className="category-and-label">
            <span>{label}</span>
            <span>{category}</span>
            </div>
        </li>
    })
    }</ul>;
}

export default Tasks;
