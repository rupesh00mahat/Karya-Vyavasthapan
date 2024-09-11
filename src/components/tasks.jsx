import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import "../style/list.css";
import { MdDelete, MdEdit } from "react-icons/md";

function Tasks() {
  const { state, dispatch } = useContext(TaskContext);

  const deleteTask = (tid) => {
    dispatch({ type: "DELETE_TASK", payload: tid });
  };

  return (
   <>
  
    <ul>
      {state.tasks &&
        state.tasks.map(({ task, category, label, id }, index) => {
          return (
            <li key={`${task}-${index}`} className="task-item">
              <div>{task}</div>
              <div className="category-and-label">
                <span>{label}</span>
                <span>{category}</span>
              </div>
              <div className="delete-update-task">
                <button
                  onClick={() => {
                    deleteTask(id);
                  }}
                >
                  <MdDelete />
                </button>
                <button>
                  <MdEdit />
                </button>
              </div>
            </li>
          );
        })}
    </ul>
   </>
  );
}

export default Tasks;
