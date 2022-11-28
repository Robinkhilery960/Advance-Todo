import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from 'axios'
import { Link } from "react-router-dom";
import Navbar3 from "./Navbars/Navbar3";


function Todoview() {  
  console.log("todoview running")
  const props=useParams()
  const [todo, setTodo]=useState({})
  const[taskCount,setTaskCount]=useState(0)

  const handleViewMore=async(todoId)=>{
    console.log("before rquest")
    const response=await axios.get(`/gettodo/${todoId}`)
    console.log("after rquest")
    console.log(response.data) 
      setTodo({...response.data}) // changing state
      console.log("todo is set") 
     console.log("taskCount",taskCount)
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
    {console.log("i am rendered")}
      <Navbar3 />
      <section className="container mx-auto flex flex-col mt-[50px]  items-center  ">
        
        <div className="flex flex-col w-[50%] bg-gray-400 text-center  justify-around p-7 rounded">
          <p className="font-bold text-4xl mt-5 text-[#222C41] uppercase ">{todo.name}</p>
          {todo.tasks && todo.tasks.map((task,index)=>{ 
            return <div className="flex flex-row mt-5 justify-between  items-center w-[100%] bg-gray-500 rounded  ">
            <p className=" ml-10 font-medium text-xl  ">{task}</p>
            <div >
              <button className="text-white  border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3 mr-3 mt-3"style={{backgroundColor:"#0395BB"}} onClick={()=>handleEdit(todo._id,index)}>Edit</button>
              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3 mt-3 mr-3" onClick={()=>handleDelete(todo._id,index)}>Delete</button>
               
            </div>
          </div>
          })}
          
          <div className="flex flex-row mt-5 justify-center items-center"> 
          <Link to={"/edittodo/"+todo._id}>
          <button className="text-white   border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3 mr-3" style={{backgroundColor:"#0395BB"}} >
          Edit
            </button>
            </Link> 
            <Link to="/dashboard">
          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3" onClick={()=>{handleDeleteTodo(todo._id)}}>
           Delete
            </button> 
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Todoview;
