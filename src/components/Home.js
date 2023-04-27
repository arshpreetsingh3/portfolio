import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#0a192f]">
     {/**Container */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="text-[#8892b0]">Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arshpreet Singh</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a front end developer (and lifelong learner)!</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate software developer having diverse portfolio of projects, courses and experience in various technologies. I'm currently looking for software engineering coops to learn new skills and expand and grow in my career. Currenly focused on building fast and responsive web applications</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400'> View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
</button>
        </div>
     </div>
    </div>
  )
}

export default Home