import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar3 from "./Navbars/Navbar3";

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
    setTimeout(()=>{
      fetchData();
    },100)
  }, [change]);
  return (
    <>
      <Navbar3/>
      {
        <section className="container mx-auto   flex flex-row flex-wrap mt-[60px] justify-center items-center ">
          {todos &&
            todos.map((todo) => {
              return (
                <div className="bg-gray-900 w-[20%] text-center shadow-2xl  rounded-xl m-4">
                  <div className="m-2   flex flex-col  ">
                    <p className="uppercase m-2 p-2 text-2xl font-bold text-gray-500 " >
                      {todo.name}
                    </p>
                    <Link to={"/todoview/" + todo._id}>
                    <button className=" text-gray-200  border-0 py-2 px-12 focus:outline-none font-medium rounded text-lg mb-3" style={{backgroundColor:"#0395BB"}}>
                    View More
                    </button>
                    </Link>
                    <Link>
                    <button
                      className="text-gray-300  bg-red-500 border-0 py-2 px-16 focus:outline-none font-medium rounded text-lg mb-3"
                      onClick={() => {
                        handelDeleteTodo(todo._id);
                      }}
                    >
                      Delete
                    </button>
                    </Link>
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
