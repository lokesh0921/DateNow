import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.svg";
import { gsap } from "gsap";
import { LogIn, LogOut } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../auth";

function Navbar() {
  const [view, setView] = useState(true);
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const mobileView = () => {
    // Ensure the initial state is correct (scale 0, off-screen)
    const tl = gsap.timeline();
    gsap.set(".mbmenu", {
      top: -500,
    });

    // Animate the menu to its final position
    tl.to(".mbmenu", {
      top: 0,
      duration: 0.7,
    });

    setView(true); // Set state to show the mobile menu
  };

  const rollback = () => {
    gsap.to(".mbmenu", {
      scale: 1,
      top: -500,
      duration: 0.7,
    });
  };

  return (
    <>
      {/* {view ? ( */}
      <div className=" bg-black w-full h-[50px] max-h-[100px] md:h-[60px] left-0 flex items-center px-4 right-0 top-0 text-base md:text-xl fi">
        <div className="md:hidden text-xl mx-auto">
          <span className="text-white font-bold space-x-2">Date</span>
          <span className="mx-[2px] text-red-500 font-bold">Now</span>
        </div>
        <div
          className="md:hidden flex w-12 top-1 right-2 absolute"
          onClick={mobileView}
        >
          <img src={menu} alt="Menu" />
        </div>
        {/* Desktop View Navbar */}
        <ul className="hidden md:flex items-center text-white space-x-10 ml-6 w-full">
          <li className="relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
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
                `${
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
                `${
                  isActive ? "border-white" : "border-transparent"
                } border-transparent border-b-2 p-1 transition-all duration-300 ease-in`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/talk"
              className={({ isActive }) =>
                `${
                  isActive ? "border-white" : "border-transparent"
                } border-transparent border-b-2 p-1 transition-all duration-300 ease-in`
              }
            >
              General Talk
            </NavLink>
          </li>

          {/* DateNow Branding */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl">
            <span className="text-white font-bold">Date</span>
            <span className="mx-[2px] text-red-500 font-bold">Now</span>
          </div>
        </ul>
        <div className="hidden md:flex">
        {user ? (
          <button
            onClick={handleLogout}
            className="flex bg-[#ffdad7] hover:bg-[#c3a4a2] text-black text-sm font-medium  py-2 px-3 rounded-full transition items-center"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="flex bg-red-500 hover:bg-[#F8A199] hover:text-black text-white text-sm font-medium py-2 px-3 rounded-full transition items-center"
          >
            <LogIn className="h-4 w-4 mr-1" />
            Login
          </NavLink>
        )}
        </div>
      </div>
      {/* ) : ( */}
      <div className="mbmenu md:hidden z-50 top-[-500px] absolute bg-black w-full min-h-[380px] max-h-[500px]  md:h-[60px] left-0 flex flex-col items-center px-4 text-base text-white">
        <div className="text-xl mx-auto my-4">
          <span className="text-white font-bold space-x-2">Date</span>
          <span className="mx-[2px] text-red-500 font-bold">Now</span>
        </div>
        <div className="flex w-12 top-1 right-2 absolute" onClick={rollback}>
          <img src={menu} alt="Menu" />
        </div>

        <NavLink
          to="/"
          onClick={rollback}
          className={({ isActive }) =>
            `${
              isActive ? "border-white" : "border-transparent"
            } border-transparent border-b-2 transition-all p-1 duration-300 ease-in my-3`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          onClick={rollback}
          className={({ isActive }) =>
            `${
              isActive ? "border-white" : "border-transparent"
            } border-transparent border-b-2 p-1 transition-all duration-300 ease-in my-3 `
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/about"
          onClick={rollback}
          className={({ isActive }) =>
            `${
              isActive ? "border-white" : "border-transparent"
            } border-transparent border-b-2 p-1 transition-all duration-300 ease-in my-3 mb-7`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/talk"
          onClick={rollback}
          className={({ isActive }) =>
            `${
              isActive ? "border-white" : "border-transparent"
            } border-transparent border-b-2 p-1 transition-all duration-300 ease-in my-3 mb-7`
          }
        >
          General Talk
        </NavLink>
        {user ? (
          <button
            onClick={handleLogout}
            className="flex bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-full transition items-center"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="flex bg-red-500 hover:bg-[#F8A199] hover:text-black text-white text-sm font-medium py-2 px-3 rounded-full transition items-center"
          >
            <LogIn className="h-4 w-4 mr-1" />
            Login
          </NavLink>
        )}
      </div>
      {/* )} */}
    </>
  );
}

export default Navbar;
