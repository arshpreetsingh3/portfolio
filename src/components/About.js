import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-screen-lg p-8 mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8'>
                    <p className='mb-3  text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
              <br />
              <p className='font-bold text-2xl mt-20'>Hi I'm Arshpreet Singh, Nice to meet you. Please take a look around and hit me up!</p>
              <br/>
              <p className='font-semibold '>Currently pursuing my Masters of Engineering in Systems and Technology from McMaster University. I'm passionate about building software that improves lives of humans. In the past, I worked for <a className= "hover:scale-125 duration-200 text-xl"href='https://www.nagarro.com/en'>Nagarro</a> where I was working on building cloud infrastructure using code and automating some of the cloud services. Always embracing new learning opportunities, taking new challenges and working passionately. I'm highly adaptable having demonstrated ability to learn new skills at fast pace.</p>
            </div>
        </div>
    </div>
  )
}

export default About