import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios"

function Modal() {
  
  const [tasks, setTasks] = useState([" ", " "]);
  const [name, setName] = useState("Todo");

  // add more tasks
  const handleMoreTasks = () => {
    const arr = [...tasks, " "];
    setTasks(arr);
  };
 
  // create todo 
  const handleCreate = async() => {
      const response= await axios.post("/createtodo",{name,tasks}) 
      console.log(response.data)
  }

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5   flex   items-center justify-center ">
          <div className=" md:w-[50%] bg-gray-100 rounded-lg p-8 flex flex-col     mt-10 md:mt-0">
            <div className="flex justify-between  items-center">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Create Your Todo
              </h2>
              <button
                className="text-white bg-green-800 border-0 py-2 px-8 focus:outline-none font-medium rounded text-lg text-[15px] mb-3"
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
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(event) => {
                  setName(event.target.value);
                }}
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
                    onChange={(event) => {
                      tasks[index] = event.target.value;
                    }}
                  />
                </div>
              );
            })}

            <div className="flex justify-center">
              <button
                className="text-white bg-green-800 border-0 py-2 px-8 focus:outline-none font-medium rounded text-lg mr-10"
                onClick={() => {
                  handleCreate();
                }}
              >
                <Link to="/todolist"> Create </Link>
              </button>
              <button className="text-white bg-red-800 border-0 py-2 px-8 focus:outline-none font-medium rounded text-lg">
                <Link to="/">Cancel</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
