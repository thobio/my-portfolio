import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import MyImage from '../assets/th.svg'

const Home = () => {
    return (
        <div name="home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-2 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-6xl font-bold'>I'm Mobile Application Developer</h2>
                    <p className='text-gray-500 py-4 max-w-xl'>
                        I have 6+ years of experience building and desgining software.
                        Currently, I love to work on mobile application using technologies like Swift, SwiftUI, Flutter and Objective-C.
                    </p>
                    <div>
                        <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={MyImage} alt="mypic" className='rounded-2xl mx-auto w-2/3 md:w-full bg-gradient-to-b from-slate-800 via-slate-800 to-slate-600' />
                </div>
            </div>
        </div>
    )
}

export default Home