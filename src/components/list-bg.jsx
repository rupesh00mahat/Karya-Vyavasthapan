import React from "react";
import "../style/list.css";
import { MdDelete } from "react-icons/md";

function ListBackground({ tasks, title }) {
  return (
    <>
      <h3>{title}</h3>
      <ul id="list-background">
        {tasks &&
          tasks.map((task, idx) => {
            return (
              <li className="task-item" key={idx}>
                {task} <button onClick={()=>{}}><MdDelete color="red"/></button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default ListBackground;
