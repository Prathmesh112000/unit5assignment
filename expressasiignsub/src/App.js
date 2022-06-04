import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import {useState} from "react"
import axios from 'axios';
import Todoitem from './Todoitem';
function App() {
    const [val, setval] = useState("")
    const [task, setTask] = useState([])

   
const getdata=()=>{
  axios.get("http://localhost:8080/").then((res)=>{
    console.log(res.data);
    setTask([...res.data.todos])
  })

}


const addtodo=()=>{
  const payload={
    id:Math.random(),
    task:val,
    status:false
  }
  axios.post("http://localhost:8080/todos",payload).then((res)=>{
    console.log(res)
  })

}

const deletetodo=(d)=>{
  console.log(d)
}
    
useEffect(()=>{
  getdata()
},[])

  return (
    <div className="App">
   <input onChange={(e)=>setval(e.target.value)}/>
   <button onClick={()=>addtodo()}>Add Todo</button>
   {task.map(elem=>{
     return <Todoitem key={elem.id} {...elem} deletetodo={deletetodo}/>
   })}
    </div>
  );
}

export default App;
