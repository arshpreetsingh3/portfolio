import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>i
                </div>
            <div></div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi I'm Arshpreet Singh, Nice to meet you. Please take a look around and hit me up!</p>
                  </div>
                  <div>
                    <p className='font-semibold '>Currently pursuing my Masters of Engineering in Systems and Technology from McMaster University. I'm passionate about building software that improves lives of humans. In the past, I worked for <a  className=" text-xl"href='https://www.nagarro.com/en'>Nagarro</a> where I was working on building cloud infrastructure using code and automating some of the cloud services. I have diverse experience with AWS and some of the devops tools.  Always embracing new learning opportunities, taking new challenges and working passionately. I'm highly adaptable having demonstrated ability to learn new skills at fast pace. I enjoy playing drums when free.</p>
                  </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default About