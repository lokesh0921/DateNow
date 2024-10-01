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
        <div className='h-screen  mt-0 w-full grid place-content-center mx-0 my-0'> 
        <div className='bg-[#ffdad7] my-0 md:pt-36 pt-12  rounded-xl shadow-2xl flex px-10 mx-5 overflow-auto md:my-0 md:mx-0 md:flex max-h-[800px]' >
            {/* Left side (Text) */}
            <div className='text-center md:text-left'>
                <h1 className='text-3xl font-mono font-bold text-black text-center md:text-left' >
                    {/* here will be typescript willbe used */}
                    Find Your <br className='md:hidden' /><span className='text-red-500 font-extrabold mx-0'>{text}</span><span className='text-green-800'><Cursor cursorStyle='❤️' /></span>
                </h1>
                <h3 className='text-xl md:text-xl mt-4 max-w-lg font-semibold text-red-500 text-center md:text-left' >
                    Where hearts meet and relationships blossom.<br /> Connect with someone special and create lasting memories.
                </h3>
                <button
                    type="submit" onClick={press}
                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold p-3 px-3 md:px-6 md:py-3 mb-8 rounded-lg mt-8 ml-auto hover:bg-orange-600 transition ease-in-out duration-300"
                >
                    Find Here
                </button>
            </div>

            {/* Right side (Image) */}
            <div className='text-right hidden md:block'>
                <img src={img} alt="SVG Graphic" className='w-[320px] h-[320px]' />
            </div>
        </div>
        </div>
    )
}

export default Home
