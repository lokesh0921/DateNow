import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black w-full h-[60px] left-0 flex items-center px-4 right-0 top-0 text-base  md:text-xl sticky">
      <ul className="flex items-center text-white space-x-10 ml-6 w-full">
        <li className="relative group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `  ${
                isActive ? "border-white" : "border-transparent"
              } border-transparent border-b-2 transition-all p-1 duration-300 ease-in`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `  ${
                isActive ? "border-white" : "border-transparent"
              } border-transparent border-b-2 p-1 transition-all duration-300 ease-in`
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `  ${
                isActive ? "border-white" : "border-transparent"
              } border-transparent border-b-2 p-1 transition-all duration-300 ease-in`
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="hidden md:block text-2xl">
        <span className="text-white  font-bold space-x-2">Date</span><span className="mx-[2px] text-red-500  font-bold">Now</span>
      </div>
    </div>
  );
}

export default Navbar;
