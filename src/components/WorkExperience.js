import React from 'react';
import Nagarro from "../assets/nagarro.png";
import Ong from "../assets/ong.png"

const WorkExperience = () => {
  return (
    <div name="work-ex" className='bg-[#0a192f]'>
    <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <h1 className='text-4xl  text-gray-300 font-bold inline border-b-4 border-pink-400 p-0 m-2'>Work Experience</h1> 


    <div className="">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2021 - December 2022</time>
        <a href='https://www.nagarro.com/en'>
        <img className="w-20 p-1 m-1 mx-0 bg-white" src={Nagarro} alt="nagarro" />
        </a><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Engineer</h3>
        <p class="mb-4 text-base font-extralight text-gray-500 dark:text-gray-400">
            <li className='font-extralight'> - Developed ETL flows and transformed data using SQL along with PySpark and Hive</li>
            <li className='font-extralight'> - Developed functional flows using AWS Stepfunctions to integrate AWS Lambdas reducing dev time</li>
            <li className='font-extralight'>- Configured code pipelines for end to end deployment of Lambdas and Stepfunctions</li>
            <li className='font-extralight'> - Collaborated with other engineering teams to outline the DevOps execution strategy</li>
        </p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020 - September 2021</time>
        <a href='https://www.nagarro.com/en'>
        <img className="w-20 p-1 m-1 mx-0 bg-white" src={Nagarro} alt="nagarro" />
        </a>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Associate Engineer</h3>
        <p class="text-base font-extralight text-gray-500 dark:text-gray-400"> 
        
            <li className='font-extralight'> - Spearheaded the development and deployment of cloud-based architecture (AWS Cloud Development Kit) using Python</li>
            <li className='font-extralight'> - Deployed Code Pipelines running across different environments</li>
            <li className='font-extralight' > - Automated AWS Gluejobs and AWS Stepfunctions reducing manual effort by more than 90%</li>
            <li className='font-extralight'> - Contributed to different Proof of Concepts</li>

        </p>
    </li>
    <li class="ml-4 mb-10">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2020 - August 2020</time>
        <a href='https://www.nagarro.com/en'>
        <img className="w-20 p-1 m-1 mx-0 bg-white" src={Nagarro} alt="nagarro" />
        </a>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Trainee Technology</h3>
        <p class="text-base font-extralight text-gray-500 dark:text-gray-400">
        <li className='font-extralight'> - Completed trainings on Advanced Java, OOP Concepts, Spring MVC, HTML,CSS, Javascript, NodeJS, Data Structures with 91%</li>
        <li className='font-extralight'> - Built a full-stack web based application of Travel Portal with multiple features like ticket booking and Covid tracking for Nagarrians using Spring MVC and Angular JS</li>  
        <li className='font-extralight'> - Worked on Proof of Concepts like Text Recognition and Speech-To-Text Apps using Google ML Kit</li>
        </p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2019 - June 2019</time>
        <a href='https://www.nagarro.com/en'>
        <img className="w-20 p-1 m-1 mx-0 bg-white" src={Ong} alt="nagarro" />
        </a>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Intern </h3>
        <p class="text-base font-extralight text-gray-500 dark:text-gray-400">
            <li className='font-extralight'> - Developed a music library where users could add albums and songs to make a personalized library.</li>
        </p>
    </li>
    </ol>
    </div>
    </div>
    </div>
  )
}

export default WorkExperience