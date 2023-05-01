import React from 'react'
import AWS from "../assets/aws.png";
import ReactIMG from "../assets/react.png";
import Javascript from "../assets/javascript.png";
import HTML from "../assets/html.png";
import Tailwind from "../assets/tailwind.png"
import Python from "../assets/Python.png"
import C from "../assets/c++.png";
import Java from "../assets/java.png";

const Skills = () => {
  return (
    <div name="skills" className=" mt-0 w-full h-screen bg-[#0a192f] text-gray-300">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400 '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto p-1 mt-2" src={Python} alt="HTML icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto p-1 mt-2" src={AWS} alt="HTML icon" />
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto  p-1 mt-2" src={ReactIMG} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto p-1 mt-2" src={Javascript} alt="HTML icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto  p-1 mt-2" src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto p1" src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-16 mx-auto p-1 mt-2" src={C} alt="HTML icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-24 mx-auto p-1 mt-2" src={Java} alt="HTML icon" />
                    <p className='my-4'>Java</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills