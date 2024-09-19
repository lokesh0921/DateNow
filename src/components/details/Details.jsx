import React from 'react'

function Details() {
    const callalert = () => {
        alert("The site is under construction. Please wait...!");
    };

    return (
        <div>
            <div className='bg-[#ffdad7] w-[400px] h-98 m-auto mt-20 outline-none ring-2 ring-white rounded-2xl shadow-2xl'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl text-black font-mono mt-10 font-bold mb-2 '>Enter Your Detail</h1>
                </div>
                <div>
                <form className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="hidden">
                                        Full Name
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black text-black font-semibold  focus:outline-none focus:ring-2 focus:ring-white-500 "
                                    />
                                </div>
    
                                <div className="flex flex-col mt-2">
                                    <label for="age" className="hidden">
                                        Age
                                    </label>
                                    <input
                                        type="age"
                                        name="age"
                                        id="age"
                                        placeholder="Age"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black text-black font-semibold  focus:outline-none focus:ring-2 focus:ring-white-500"
                                    />
                                </div>
    
                                <div className="flex flex-col mt-2">
          <label htmlFor="gender" className="hidden">Gender</label>
          <select
            id="gender"
            name="gender"
            className="bg-white w-150 border text-black rounded-lg py-2 px-3 border-black focus:outline-none focus:ring-2 focus:ring-white-500"
          >
            <option value="" disabled selected>Select your gender</option>
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
      )
}

export default Details