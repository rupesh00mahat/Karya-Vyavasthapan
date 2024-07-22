import React from 'react'

function ListBackground({tasks}) {
  return (
    <ul id='list-background'>
            {tasks&& tasks.map((task, idx)=>{
                return <li className='task-item' key={idx}>{task}</li>
            })}
    </ul>
  )
}

export default ListBackground