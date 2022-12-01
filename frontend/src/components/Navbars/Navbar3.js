import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import bell from '../../assets/notification.svg' 
function Navbar3() {
  return (
    <header className="text-gray-600 body-font  bg-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between  ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://dummyimage.com/600x400/662466/fff"
            className="h-16 w-16 rounded-full"
            alt="user_img"
          />
          <p className="font-medium text-gray-300">
            <span className="font-bold text-white ml-5 mr-2">Hi</span>Robin
          </p>
          <img src={bell} className="h-6 w-6 ml-5" alt="" />
        </a>
        <nav className=" w-1/2 flex flex-wrap items-center justify-around text-white font-medium">
          <fieldset class="  space-y-1  ">
            <label for="Search" class="hidden">
              Search
            </label>
            <div class="relative ">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  class="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    class="w-4 h-4 dark:text-gray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                class="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800  "
              />
            </div>
          </fieldset>
          <a className="mr-5">
            {" "}
            <Link to="/dashboard">Dashboard</Link>{" "}
          </a>
          <a className="mr-5">
            <div class="dropdown">
              <label tabindex="0" class="btn m-1">
                Filter
              </label>
              {/* <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul> */}
            </div>
          </a>
          
          <a className="mr-5">
            {" "}
            <Link to="/createyourtodo">Create Todo</Link>{" "}
          </a>
          <img src={logo} className="h-16 w-16" rounded />
        </nav>
      </div>
    </header>
  );
}

export default Navbar3;
