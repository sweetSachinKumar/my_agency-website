import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
import { IoLogoWhatsapp } from "react-icons/io";


const Navbar = ({isActive}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    {link: "Overview", path:"home"},
    {link: "Feature", path:"feature"},
    {link: "Pricing", path:"pricing"},
    {link: "Gallary", path:"gallary"},
  ]


  return (
    <>
    <nav className={`md:px-8 lg:px-14 p-4 max-w-screen-2xl mx-auto text-primary relative `}>
      <div className='text-xl flex gap-14 items-center justify-between container font-medium mx-auto'>
        <div className='flex gap-6 md:gap-14 items-center justify-between'>
          <span className='text-primary font-semibold mx-2 lg:mx-4 my-2 inline-block text-xl md:text-2xl'> <span className='bg-primary text-white ps-2 pe-0.5'>Sachin</span> Kumar</span>

          <ul className='md:flex hidden gap-6 lg:gap-12 text-lg'>
            {
              navItems.map(item => <li key={item.path}><Link to={item.path} spy={true} smooth={true} activeClass='active' className='hover:text-primary/50 duration-200 transition-all cursor-pointer'>{item.link}</Link></li>)
            }
          </ul>
        </div>

        <div className=' lg:space-x-12 flex items-center'>
        <a href='https://api.whatsapp.com/send?phone=+917703849283&text=hey, can you build a website for my shop. give me more information about it' target='_blank' className="hidden lg:inline-flex  border-0 py-2 px-6 focus:outline-none bg-purple-500 font-semibold text-white rounded  hover:bg-primary  text-lg  gap-2 items-center"> <IoLogoWhatsapp className='text-green-300'/> contact me</a>

          {/* <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 sm:block hidden'>sign up</button> */}
        </div>

        {/* menu btn, only display on mobile */}
        <div className='md:hidden text-2xl'>
          <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className='text-primary focus:outline-none focus:text-gray-500 p-2'>
         {
          isMenuOpen? <MdOutlineClose/> : <IoMdMenu/>
         }
          </button>
        </div>

       
      </div>
    <ul className={`  px-4 p-5 text-white bg-secondary z-[500] md:hidden ${isMenuOpen? "block absolute top-full left-0 right-0 text-lg" : "hidden"}`}>
    {
              navItems.map(item => <li key={item.path} className=''><Link to={item.path} spy={true} smooth={true}  className='block  hover:bg-white/10 px-4 py-2 hover:ml-1 transition-all duration-200' >{item.link}</Link></li>)
            }
    </ul>
    </nav>
    
    </>
  )
}

export default Navbar
