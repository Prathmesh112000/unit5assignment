import React from 'react'

function Todoitem({id,task,status,deletetodo}) {
  return (
    <div>
        <h1>{task}</h1>
        <button onClick={()=>deletetodo(id)}>Delete</button>
    </div>
  )
}

export default Todoitem