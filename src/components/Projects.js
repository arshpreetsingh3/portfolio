import React from 'react'
import FoodVilla from "../assets/projects/FoodVilla.jpg";
import YoutubeClone from "../assets/projects/youtubeClone.jpg";

const Projects = () => {
  return (
    <div name="projects"className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-300'> Work</p>
                <p className='py-6'>// Check out some of my recent projects</p>
            </div>
            {/**container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/** grid iteem */}
                <div 
                  style={{ backgroundImage: `url(${FoodVilla})`}} 
                className="shadow-lg shadow-indigo-400 group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl rounded-lg  bg-white text-pink-700 font-bold text-while tracking-wider'>
                            Food Villa Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://cerulean-semolina-fc7c01.netlify.app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/arshpreetsingh3/food-villa'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{ backgroundImage: `url(${YoutubeClone})`}} 
                className="shadow-lg shadow-indigo-400 group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl rounded-lg  bg-white text-pink-700  font-bold text-while tracking-wider'>
                           Youtube Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://cute-salmiakki-9bcf36.netlify.app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/arshpreetsingh3/youtube-clone'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Projects