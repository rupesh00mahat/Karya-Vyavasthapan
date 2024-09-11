import InputArea from "./components/input-area";
import Tasks from "./components/tasks";
import TaskContextProvider from "./context/taskContext";
import "./style/global.css";

function App() {
  return (
    <>
      <TaskContextProvider>
        <InputArea />
        <Tasks/>
      </TaskContextProvider>
    </>
  );
}

export default App;
