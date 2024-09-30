import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import img from './img1.svg'
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const [text] = useTypewriter({
        words: ['Love', 'Partner', 'Wife', 'Friends', 'Companion', 'Soulmate', 'Connection', 'Romance', 'Happiness', 'Chemistry', 'Bond', 'Trust', 'Support'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 80
    })

    const navigate = useNavigate();
    const press = () => {
        navigate('/details'); // Navigate to the /details route
    };

    return (
        <div className=' h-screen  mt-0 w-full grid place-content-center '>
        <div className='bg-[#ffdad7]   pt-36  rounded-xl shadow-2xl flex px-20'>
            {/* Left side (Text) */}
            <div className='text-left'>
                <h1 className='text-3xl font-mono font-bold text-black'>
                    {/* here will be typescript willbe used */}
                    Find Your <span className='text-red-500 font-extrabold'>Connection</span> <span className='text-green-800'><Cursor cursorStyle='❤️' /></span>
                </h1>
                <h3 className='text-lg mt-4 max-w-lg font-semibold text-red-500'>
                    Where hearts meet and relationships blossom.<br /> Connect with someone special and create lasting memories.
                </h3>
                <button
                    type="submit" onClick={press}
                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-8 ml-auto hover:bg-orange-600 transition ease-in-out duration-300"
                >
                    Find Here
                </button>
            </div>

            {/* Right side (Image) */}
            <div className='text-right'>
                <img src={img} alt="SVG Graphic" className='w-[320px] h-[320px]' />
            </div>
        </div>
        </div>
    )
}

export default Home
