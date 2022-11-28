import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    console.log("hello from hanf]dle submit");
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const loginServer=async()=>{
    console.log("hello from login erver")
    console.log("email",email)
    console.log("password",password)
    const response=await axios.post("/getuser",{
      email,
      password
    })
    console.log("response login",response)
    if(response.status===201){ 
          navigate("/landingpage")
    }else { 
      return toast.warn(response.data);
    }
  }

  const handleSignIn=()=>{ 
    console.log("hello from handleSignIN")
    console.log(`Email ${email} password ${password}`)
    // email and password are required
    if (!(email && password)) {
      return toast.error("Email and Password are compulsory");
    }
    // check email format valid
    if (!validateEmail(email)) {
      return toast.error("Incorrect  email format");
    }
     loginServer()
  }

  return (
    <>
      <ToastContainer />
      <body className=" bg-bgImg object-center  bg-cover bg-no-repeat bg-left-bottom bg-local">
        <section class="min-h-screen flex items-stretch text-white  ">
          <div
            class="lg:flex w-1/2 hidden  items-center  
        "
          >
            <div class="absolute  "></div>
            <div class="w-full px-24 z-10">
              <h1 class="text-4xl font-bold text-left tracking-wide">
                Organize your
                <br className="hidden lg:inline-block" />
                work and life, finally.
              </h1>
              <p class="text-2xl my-4">
                Become focused, organized, and calm
                <br /> with Todo App. A task manager and to-do list app with a
                lot of features.
                <br />
              </p>
            </div>
          </div>
          <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
            <div class="w-full py-6 z-20 flex flex-col items-center">
              <form
                action=""
                class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto "
                onSubmit={(event) => {
                  handleSubmit(event);
                }}
              >
                <div class="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="block w-full p-3 text-lg rounded-lg  outline-none text-gray-900"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div class="pb-2 pt-4">
                  <input
                    class="block w-full p-3 text-lg rounded-lg outline-none text-gray-900"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div class="text-right text-gray-900 hover:underline hover:text-gray-100">
                  <a href="#">Forgot your password?</a>
                </div>
                <div class="px-3 pb-2 pt-3"> 
                    <button
                      class="uppercase block w-full p-4 text-lg rounded-full    focus:outline-none"
                      style={{ backgroundColor: "#0395BB" }}
                       onClick={()=>{handleSignIn()}}
                    >
                      sign in
                    </button> 
                </div>
              </form>
              <hr class="my-6 border-gray-300 w-[80%] " />
              <button
                type="button"
                class="w-[80%] block bg-white    text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    class="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span class="ml-4">Log in with Google</span>
                </div>
              </button>
              <p class="mt-8">
                Need an account?{" "}
                <a
                  href="#"
                  class="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  <Link to="/register">Create an account</Link>
                </a>
              </p>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Login;
