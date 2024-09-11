import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const taskContextReducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    let oldTasks = state.tasks;
    return { ...state, tasks: [...oldTasks, action.payload] };
  }
};

function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskContextReducer, { tasks: [] });
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
