import { useState } from "react";
import ListBackground from "./components/list-bg";
import Navbar from "./components/navbar";
import './style/global.css';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const itemsFromBackEnd = [{id: 0, task: 'Enter the gym'}, {id: 1, task: 'Hit deadlift'}];

function App() {

    const [task, newTask] = useState([]);
    const [columns, setColumns] = useState(itemsFromBackEnd)

    const createNewTask = (e) =>{
        e.preventDefault();
        newTask([...task, 'Hit the gym']);
    }

 return <>
 <Navbar/> 
 <button
 onClick={createNewTask}
 >Create Task</button>
 <DragDropContext onDragEnd={result => console.log(result)}>
    {Object.entries(columns).map(([id, columns])=>{
        return (
            <Droppable droppableId={id}>
                {(provided, snapshot)=>{
                    return (
                        <div {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{background: snapshot.isDraggingOver ? 'lightblue': 'lightgreen',
                            padding: 4,
                            width: 200,
                            minHeight: 500,

                        }}
                        >

                        </div>

                    )
                }}
            </Droppable>
        );
    })}
 </DragDropContext>
<div className="container list-background-wrapper flex justify-between">
    <ListBackground tasks={task}/>
    <ListBackground/>
    <ListBackground/>
</div>
 </>
}

export default App;
