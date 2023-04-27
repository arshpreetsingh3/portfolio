import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="post"action="https://getform.io/f/7816848c-7e3b-4684-b386-6221be95eb6d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300'> Contact </p>
                <p className='text-gray-300 py-4'>// Shoot me an email - personal <a  className="font-bold"href='mailto:sarshpreet07@gmail.com'> sarshpreet07@gmail.com</a> </p>
                <p className='text-gray-300 py-4'>// Shoot me an email - work <a  className="font-bold"href='mailto:singa322@mcmaster.ca'> singa322@mcmaster.ca</a> </p>
                <p className='text-gray-300 py-4'>// Connect on Linkedin - <a  className="font-bold"href='https://www.linkedin.com/in/arshpreetsingh3/'>Arshpreet Singh</a> </p>
            </div>
            <input className="bg-[#ccd6f6] p-2"type='text' placeholder='Name' name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name="email"/>
            <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 my-8 mx-auto flex items-center'>  Lets Connect </button>
        </form>
    </div>
  )
}

export default Contact