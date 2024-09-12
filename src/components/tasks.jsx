import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import "../style/list.css";
import { MdDelete, MdEdit } from "react-icons/md";

function Tasks() {
  const { state, dispatch } = useContext(TaskContext);

  const deleteTask = (tid) => {
    dispatch({ type: "DELETE_TASK", payload: tid });
  };

  const updateTask = (tid) => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { openState: true, type: "EDIT", id: tid },
    });
  };

  return (
    <>
    <div>
    <div className="filter-category">
    <span>Category</span>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    <div className="filter-label">
    <span>Label</span>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    </div>
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
                  <button
                    onClick={() => {
                      updateTask(id);
                    }}
                  >
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
