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
    if(action.payload.type === "EDIT"){
      console.log(action.payload);
    }
  return {...state, openModal: action.payload};
  }
};

function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskContextReducer, {
    tasks: [],
    openModal: {openState: false, type: ""},
  });
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
