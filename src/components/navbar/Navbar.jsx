import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="bg-black w-full h-[60px] flex items-center px-4">
  <ul className="flex items-center text-white space-x-10 ml-6">
    <li className="relative group">

      <NavLink to="/" className={({isActive}) =>`  ${isActive ? "border-white": "border-transparent"} border-transparent border-b-2 transition-all p-1 duration-300 ease-in`}>Home</NavLink>
    </li>
    <li className="relative group">
      <NavLink to="/contact" className={({isActive}) =>`  ${isActive ? "border-white": "border-transparent"} border-transparent border-b-2 p-1 transition-all duration-300 ease-in`}>Contact Us</NavLink>
    </li>
    <li className="relative group">
      <NavLink to="/about" className={({isActive}) =>`  ${isActive ? "border-white": "border-transparent"} border-transparent border-b-2 p-1 transition-all duration-300 ease-in`}>About Us</NavLink>
    </li>
  </ul>
  <div className="ml-auto flex items-center mr-6 space-x-3">
    <input type="text" placeholder="Search Here" className="text-black h-7 rounded-md p-1 " />
    <button className="ml-2 text-white bg-gray-700 text-sm pr-2 pl-2 pt-1 pb-1 rounded-xl border-2 border-transparent hover:border-white transition-all duration-300 ease-in">Search</button>
  </div>
</div>
  );
}

export default Navbar;
