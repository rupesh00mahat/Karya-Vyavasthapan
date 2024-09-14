import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/taskContext";
import "../style/list.css";
import { MdDelete, MdEdit } from "react-icons/md";

function Tasks() {
  const { state, dispatch } = useContext(TaskContext);
  const [labelList, setLabelList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [tasksToShow, setTasksToShow] = useState([]);
  const [selectedDueDate, setSelectedDueDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLabel, setSelectedLabel] = useState("all");

  const deleteTask = (tid) => {
    dispatch({ type: "DELETE_TASK", payload: tid });
  };

  const updateTask = (tid) => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { openState: true, type: "EDIT", id: tid },
    });
  };

  useEffect(() => {
    if (state.tasks.length > 1) {
      let labList = [];
      let catList = [];
      state.tasks.forEach((taskItem) => {
        labList.push(taskItem.label);
        catList.push(taskItem.category);
      });
      setLabelList(labList);
      setCategoryList(catList);
    }
  }, [state.tasks]);

  useEffect(() => {
    let newTasks = [];
    if (state.tasks.length > 0 && selectedCategory !== "all") {
      newTasks = state.tasks.filter(
        (item) => item.category === selectedCategory
      );
    } else {
      newTasks = state.tasks;
    }

    setTasksToShow(newTasks);
  }, [selectedCategory, state.tasks]);
  useEffect(() => {
    let newTasks = [];
    if (state.tasks.length > 0 && selectedLabel !== "all") {
      newTasks = state.tasks.filter((item) => item.label === selectedLabel);
    } else {
      newTasks = state.tasks;
    }
    setTasksToShow(newTasks);
  }, [selectedLabel, state.tasks]);

  useEffect(() => {
    let newTasks = [];
    if (state.tasks.length > 0 && selectedDueDate !== "") {
      newTasks = state.tasks.filter((item) => item.dueDate === selectedDueDate);
    } else {
      newTasks = state.tasks;
    }
    setTasksToShow(newTasks);
  }, [selectedDueDate, state.tasks]);

  return (
    <>
      <div className="category-and-label-filter">
        {categoryList && categoryList.length > 1 && (
          <div className="filter-category">
            <span>Category</span>
            <select
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
            >
              {categoryList.map((categoryItem, index) => {
                return (
                  <option key={`${categoryItem}-${index}`}>
                    {categoryItem}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {labelList && labelList.length > 1 && (
          <div className="filter-label">
            <span>Label</span>
            <select
              onChange={(e) => {
                setSelectedLabel(e.target.value);
              }}
            >
              {labelList.map((labelItem, index) => {
                return (
                  <option key={`${labelItem}-${index}`}>{labelItem}</option>
                );
              })}
            </select>
          </div>
        )}
        {state.tasks.length > 1 && (
          <div className="date-filter">
            <span>Due Date</span>
            <input
              type="date"
              value={selectedDueDate || ""}
              onChange={(e) => {
                setSelectedDueDate(e.target.value);
              }}
            />
          </div>
        )}
      </div>
      <ul>
        {tasksToShow &&
          tasksToShow.map(({ task, category, label, id, dueDate }, index) => {
            return (
              <li key={id} className="task-item">
                <div className="task-name">{task}</div>
                <div className="category-and-label">
                  Label:
                  <span className="label">{label}</span>
                  Category:
                  <span className="category">{category}</span>
                  Due Date:
                  <span className="due-date">{dueDate}</span>
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
