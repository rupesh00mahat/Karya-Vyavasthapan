import { useState } from "react";
import ListBackground from "./components/list-bg";
import Navbar from "./components/navbar";
import './style/global.css';
function App() {

    const [task, newTask] = useState([]);

    const createNewTask = (e) =>{
        e.preventDefault();
        newTask([...task, 'Hit the gym']);
    }

 return <>
 <Navbar/> 
 <button
 onClick={createNewTask}
 >Create Task</button>
<div className="container list-background-wrapper flex justify-between">
    <ListBackground tasks={task}/>
    <ListBackground/>
    <ListBackground/>
</div>
 </>
}

export default App;
