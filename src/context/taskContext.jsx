import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const taskContextReducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    let oldTasks = state.tasks;
    return { ...state, tasks: [...oldTasks, action.payload] };
  } else if (action.type === "DELETE_TASK") {
    let updatedTask = state.tasks.filter((item) => item.id !== action.payload);
    return { ...state, tasks: updatedTask };
  } else if (action.type === "TOGGLE_MODAL") {
    return { ...state, openModal: action.payload };
  } else if (action.type === "EDIT") {
    console.log(action);
    let updatedTask = state.tasks.filter(
      (item) => item.id !== state.openModal.id
    );
    let newTask = action.payload;

    return { ...state, tasks: [...updatedTask, newTask] };
  }
};

function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskContextReducer, {
    tasks: [],
    openModal: { openState: false, type: "" },
  });
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
