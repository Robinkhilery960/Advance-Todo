import React from "react";
import {Link} from "react-router-dom"

function Herosection() {
  return (
    <section className="text-gray-600 body-font text-gray-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            className="object-cover object-center rounded"
            alt="hero"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium ">
            Organize your
            <br className="hidden lg:inline-block" />
            work and life, finally.
          </h1>
          <p className="mb-8 text-xl">
            Become focused, organized, and calm<br/> with Todo App. An efficent
            task manager and to-do list app.<br/>
           <span className="font-bold "> Create Your first todo</span>
          </p>
          <div className="flex justify-center">
            <button className="inline-flex  font-medium  text-white   border-0 py-2 px-6 focus:outline-none   rounded text-lg " style={{backgroundColor:"#0395BB"}}>
            <Link to="/createyourtodo">Create Your First Todo</Link>  
            </button>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
