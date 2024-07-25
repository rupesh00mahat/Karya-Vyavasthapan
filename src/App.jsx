import { useState, useRef } from "react";
import ListBackground from "./components/list-bg";
import Navbar from "./components/navbar";
import './style/global.css';


function App() {

    const [task, newTask] = useState([]);
    const inputTask = useRef("");

    const createNewTask = (e) =>{
        e.preventDefault();
       newTask([...task,inputTask.current.value]);
       inputTask.current.value  = "";
    }

 return <>
 <Navbar/> 
    <input type="text" name="task" id="task" ref={inputTask} />
 <button
 onClick={createNewTask}
 >Create Task</button>
 
<div className="container list-background-wrapper flex justify-between">
    <ListBackground title="Not Started" tasks={task}/>
    <ListBackground title="Ongoing"/>
    <ListBackground title="Finished"/>
</div>
 </>
}

export default App;
