import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const pressed = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (gender === "Other") {
      alert('Fuck You Bits this site is not for you...');
      window.location.href = 'https://youtu.be/j_nJPCgxYS4?si=H0SU1sJ4qozYignB';
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);

    navigate("/match");
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
          <form className="p-6 flex flex-col justify-center" onSubmit={pressed}>
            <div className="flex flex-col">
              <label htmlFor="name" className="hidden">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-white h-11 mt-2 w-150 border text-black rounded-lg py-2 px-3 border-black focus:outline-none focus:ring-2 focus:ring-white-500"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
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
