import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; 
import axios from 'axios'
import { Link } from "react-router-dom";


function Todoview() {  
  const props=useParams()
  const [todo, setTodo]=useState({})
  const[taskCount,setTaskCount]=useState(0)

  const handleViewMore=async(todoId)=>{
    const response=await axios.get(`/gettodo/${todoId}`)
    console.log(response.data)
    setTodo({...response.data}) 
     console.log(taskCount)
}
//handle delete task
 async function handleDelete(todoId,index){ 
   await axios.delete(`/deletetask/${todoId}/${index}`)  
     setTaskCount(taskCount+1)   
}
//handle edit task
 async function handleEdit(todoId,index){ 
  const text=prompt("Enter new Task")
   await axios.put(`/edittask/${todoId}/${index}`,{text})  
     setTaskCount(taskCount+1)   
}
// handle delete todo 
const handleDeleteTodo=async(todoId)=>{
     await axios.delete(`/deletetodo/${todoId}`)
     
}
useEffect(()=>{
  console.log("hello from use effect")
  handleViewMore(props.id)
},[taskCount])
  return (
    <>
      <Navbar />
      <section className="container mx-auto flex flex-col mt-[50px]  items-center  ">
        
        <div className="flex flex-col w-[50%] bg-gray-400 text-center  justify-around p-7 rounded">
          <p className="font-bold text-4xl mt-5 ">{todo.name}</p>
          {todo.tasks && todo.tasks.map((task,index)=>{ 
            return <div className="flex flex-row mt-5 justify-between  items-center w-[100%] bg-gray-500 rounded  ">
            <p className=" ml-10 font-medium text-xl  ">{task}</p>
            <div >
              <button className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3 mr-3 mt-3" onClick={()=>handleEdit(todo._id,index)}>Edit</button>
              <button className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3 mt-3 mr-3" onClick={()=>handleDelete(todo._id,index)}>Delete</button>
               
            </div>
          </div>
          })}
          
          <div className="flex flex-row mt-5 justify-center items-center"> 
          <button className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3 mr-3" >
           <Link to={"/edittodo/"+todo._id}>Edit</Link> 
            </button>
          <button className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3" onClick={()=>{handleDeleteTodo(todo._id)}}>
           <Link to="/todolist">Delete</Link>
            </button> 
          </div>
        </div>
      </section>
    </>
  );
}

export default Todoview;
