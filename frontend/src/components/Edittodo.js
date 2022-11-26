import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import Navbar3 from './Navbars/Navbar3';
function Edittodo() {
    const props=useParams()
    console.log(props)
    const [todo, setTodo] = useState({});
    const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");


  const fetchData=async()=>{
       const {data}= await axios.get(`/gettodo/${props.id}`)
        setTodo({...data})
        setName(data.name)
        setTasks([...data.tasks])
  }

  const handleMoreTasks = () => {
    const arr = [...tasks, " "];
    setTasks(arr);
  };
 
  const handleSubmit = async() => {
       const reponse= await axios.put(`/edittodo/${props.id}`,{name,tasks})
  };
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <Navbar3 />
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto px-5   flex   items-center justify-center ">
          <div className=" md:w-[50%] bg-gray-100 rounded-lg p-8 flex flex-col     mt-10 md:mt-0">
            <div className="flex justify-between  items-center">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                  Edit Todo
              </h2>
              <button
                className="text-white  border-0 py-2 px-8 focus:outline-none font-medium rounded text-lg text-[15px] mb-3 " style={{backgroundColor:"#0395BB"}}
                onClick={() => {
                  handleMoreTasks();
                }}
              >
                Add More Tasks
              </button>
            </div>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Name Your Todo
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " defaultValue={name}  onChange={(event)=>{setName(event.target.value)}}
              />
            </div>
            {tasks.map((task, index) => {
              return (
                <div className="relative mb-4">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Task {index + 1}
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="text"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    defaultValue={task} 
                    onChange={(event) => {
                      tasks[index] = event.target.value;
                    }}
                  />
                </div>
              );
            })}

            <div className="flex justify-center">
              <button
                className="text-white   border-0 py-2 px-8 focus:outline-none font-medium rounded text-lg mr-10" style={{backgroundColor:"#0395BB"}}
                onClick={() => {
                  handleSubmit();
                }}
              >
                <Link to={"/todoview/"+todo._id}> Submit </Link>
              </button>
              <button className="text-white bg-red-800 border-0 py-2 px-8 focus:outline-none font-medium rounded text-lg">
                <Link to={"/todoview/"+todo._id}>Cancel</Link>
              </button>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Edittodo