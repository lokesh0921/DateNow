import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [view, setView] = useState(true);



  const mobileView = () => {
    // Ensure the initial state is correct (scale 0, off-screen)
    const tl=gsap.timeline();
    gsap.set(".mbmenu", {
      scale: 1,
      top: -300,
    });
  
    // Animate the menu to its final position
    tl.to(".mbmenu", {
      scale: 1,
      top: 0,
      duration: 0.7,
    });
  
    setView(true); // Set state to show the mobile menu
  };
  
  const rollback = () => {
    gsap.to(".mbmenu", {
      scale: 1,
      top:-300,
      duration: 0.7,
    });
  };

  return (
    <>
      {/* {view ? ( */}
        <div className=" bg-black w-full h-[50px] max-h-[100px] md:h-[60px] left-0 flex items-center px-4 right-0 top-0 text-base md:text-xl sticky">
          <div className="md:hidden text-xl mx-auto">
            <span className="text-white font-bold space-x-2">Date</span>
            <span className="mx-[2px] text-red-500 font-bold">Now</span>
          </div>
          <div className="md:hidden flex w-12 top-1 right-2 absolute" onClick={mobileView}>
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
                Talk
              </NavLink>
            </li>
          </ul>
          <div className="hidden md:block text-2xl">
            <span className="text-white font-bold space-x-2">Date</span>
            <span className="mx-[2px] text-red-500 font-bold">Now</span>
          </div>
        </div>
      {/* ) : ( */}
        <div className="mbmenu  md:hidden top-[-300px] absolute bg-black w-full max-h-[400px]  md:h-[60px] left-0 flex flex-col items-center px-4 text-base text-white">
          <div className="text-xl mx-auto my-4">
            <span className="text-white font-bold space-x-2">Date</span>
            <span className="mx-[2px] text-red-500 font-bold">Now</span>
          </div>
          <div
            className="flex w-12 top-1 right-2 absolute"
            onClick={rollback}
          >
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
            Talk
          </NavLink>
        </div>
      {/* )} */}
    </>
  );
}

export default Navbar;
