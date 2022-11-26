import React from 'react'
import { Link } from 'react-router-dom' 

function Navbar() {
  return (
<header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between  ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/2410/schoolLogo/1657573685244Custom%20Size%20%E2%80%93%201.png' className='h-16 w-16'></img>
      <span className="ml-3 text-xl ">TODO App</span>
    </a>
    <div> 
    <button className="inline-flex items-center bg-btn border-0 py-2 px-4 focus:outline-none  font-medium  text-white bg-green-900  mr-10  rounded text-base mt-4 md:mt-0">
      <Link to="/">Home</Link> 
    </button>
    <button className="inline-flex items-center bg-btn border-0 py-2 px-4 focus:outline-none  font-medium  text-white bg-green-900  mr-10  rounded text-base mt-4 md:mt-0">Signup 
    </button>
    <button className="inline-flex items-center bg-btn border-0 py-2 px-4 focus:outline-none  font-medium   text-white bg-green-900  rounded text-base mt-4 md:mt-0">Login 
    </button>
    </div>
  </div>
</header>
  )
}

export default Navbar