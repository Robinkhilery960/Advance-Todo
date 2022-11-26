import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Todolist() {
  const [todos, setTodos] = useState("");
  const [change,setChange]=useState(0)
  const fetchData = async () => {
    const response = await axios.get("/gettodos");
    const arr = [...response.data];
    console.log([...response.data]);
    setTodos([...response.data]);
    console.log(todos);
  };

  const handelDeleteTodo=async(todoId)=>{
    await axios.delete(`/deletetodo/${todoId}`)
    console.log("i an in delete todo")
    setChange(change+1)
    
}

  useEffect(() => {
    fetchData();
  }, [change]);
  return (
    <>
      <Navbar />
      {
        <section className="container mx-auto   flex flex-row flex-wrap mt-[60px] justify-center items-center ">
          {todos &&
            todos.map((todo) => {
              return (
                <div className="bg-gray-200 w-[20%] text-center shadow-2xl  rounded-xl m-4">
                  <div className="m-2 p-2 flex flex-col  ">
                    <p className="text-gray-900 m-2 p-2 text-2xl font-bold ">
                      {todo.name}
                    </p>
                    <button className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3">
                      <Link to={"/todoview/" + todo._id}>View More</Link>
                    </button>
                    <button
                      className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none font-medium rounded text-lg mb-3"
                      onClick={() => {
                        handelDeleteTodo(todo._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) 
            })} 
        </section>
      }
    </>
  ) 
}

export default Todolist;
