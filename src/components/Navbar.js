import React,{useState} from 'react';
import logo from "../assets/logo.png";
import Resume from "../assets/Arshpreet_Singh.pdf"
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from "react-icons/bs";
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => { setNav(!nav)}
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            {/* <img src={logo} alt="Logo Image" className='w-12' /> */}
            {/* <h4 className='text-4xl'> Arshpreet Singh</h4> */}
        </div>
        {/** Menu
         * Anything above medium should display
         */}


            <ul className='hidden md:flex'>
                <li className='hover:scale-110 duration-200'>
                <Link  activeClass="active" to="Home"  smooth={true} duration={500} >
                 Home
                </Link>
                </li>
                <li className='hover:scale-110 duration-200'>
                <Link  to="about"  smooth={true} duration={500} >
                 About
                </Link>
                </li>
                <li className='hover:scale-110 duration-200'>
                <Link  to="skills"  smooth={true} duration={500} >
                 Skills
                </Link>
                </li>
                <li className='hover:scale-110 duration-200'>
                <Link  to="work-ex"  smooth={true} duration={500} >
                 Work Experience
                </Link>
                </li>
                <li className='hover:scale-110 duration-200'> 
                <Link  to="projects"  smooth={true} duration={500} >
                 Projects
                </Link></li>
                <li className='hover:scale-110 duration-200'> 
                <Link  to="contact"  smooth={true} duration={500} >
                 Contact
                </Link></li>
            </ul>
        
        {/** Hamburger */}
        <div onClick={handleClick} className='cursor-pointer md:hidden z-10'> 
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/**Mobile Menu absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'*/}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>     
                <Link onClick={handleClick} activeClass="active" to="Home"  smooth={true} duration={500} >
                 Home
                </Link></li>
                <li className='py-6 text-4xl'>    
                <Link onClick={handleClick} to="about"  smooth={true} duration={500} >
                 About
                </Link></li>
                <li className='py-6 text-4xl'> 
                <Link onClick={handleClick} to="skills"  smooth={true} duration={500} >
                 Skills
                </Link></li>
                <li className='py-6 text-4xl'> 
                <Link onClick={handleClick} to="work-ex"  smooth={true} duration={500} >
                 Work Experience
                </Link></li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects"  smooth={true} duration={500} >
                 Projects
                </Link></li>
                <li className='py-6 text-4xl'>    
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
                 Contact
                </Link></li>
        </ul>
        {/**Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-200"
                       href='https://www.linkedin.com/in/arshpreetsingh3/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-200"
                       href='https://github.com/arshpreetsingh3'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-200"
                       href='mailto:sarshpreet07@gmail.com'>
                        Personal Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-200"
                       href='mailto:singa322@mcmaster.ca'>
                        WorkEmail <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-200"
                       href={Resume} download={true}>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar