import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();

  // Check if user is allowed to access this page
  useEffect(() => {
    const hasNavigatedFromHome = sessionStorage.getItem("fromHome");

    if (!hasNavigatedFromHome) {
      navigate('/'); // Redirect to home if user hasn't come from the Home page
    }

    // Handle page reload or close
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("fromHome"); // Clear session on reload
      navigate('/'); // Navigate to home page on reload
    };

    // Add event listener for page reload
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  const callalert = () => {
    alert("The site is under construction. Please wait...!");
  };

  return (
    <div className="h-screen mt-0 w-full grid place-content-center">
      <div className="bg-[#ffdad7] rounded-xl shadow-2xl flex flex-col px-5 mx-5 overflow-auto md:my-0 md:mx-0 max-w-full">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-3xl text-black font-mono mt-10 font-bold mb-2">
            Enter Your Detail
          </h1>
        </div>
        <div>
          <form className="p-6 flex flex-col justify-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="hidden">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 md:w-[400px] mt-2 py-3 px-3 rounded-lg bg-white border border-black text-black font-semibold focus:outline-none focus:ring-2 focus:ring-white-500"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="age" className="hidden">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black text-black font-semibold focus:outline-none focus:ring-2 focus:ring-white-500"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="gender" className="hidden">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="bg-white h-11 mt-2 w-150 border text-black rounded-lg py-2 px-3 border-black focus:outline-none focus:ring-2 focus:ring-white-500"
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <button
              type="submit"
              onClick={callalert}
              className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-8 ml-auto hover:bg-orange-600 transition ease-in-out duration-300"
            >
              Find
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;
