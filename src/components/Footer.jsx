import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter  } from "react-icons/fa";
import { Link } from 'react-scroll';
const Footer = () => {
    const navItems = [
        {link: "Overview", path:"home"},
        {link: "Feature", path:"feature"},
        {link: "Pricing", path:"pricing"},
        {link: "Gallary", path:"gallary"},
      ]
    
    return (
        <nav className=' bg-[#010051]/95 text-white md:px-8 lg:px-14 p-4 max-w-screen-2xl mx-auto '>
            <div className='my-12  flex flex-col md:flex-row  justify-between  gap-10 '>

                <div className='md:w-1/2 space-y-8'>
                    <span className='text-white font-semibold mx-2 lg:mx-4 my-2 inline-block text-xl md:text-2xl'> <span className='bg-white ps-2 pe-0.5 text-primary'>Sachin</span> Kumar</span>
                    <p className=' '>hello, my name is Sachin Kumar. I am professional web Developer. I create web site in Low cost. </p>
                    {/* <div>
                        <input type="email" name="email" id="email" placeholder='Your email...' className='bg-[#9a7af159] py-2 px-4 focus:outline-none' />
                        <input type="submit" value="subcribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-primary' />

                    </div> */}

                </div>
                {/* footer navigation  */}
                <div className='md:w-2/3  flex flex-col md:flex-row  justify-between gap-8 items-start flex-wrap'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className=' space-y-3'>
                            {
                                navItems.map(item => <li key={item.path}><Link to={item.path}  spy={true} smooth={true} activeClass='active' className='block cursor-pointer hover:text-gray-300'>{item.link}</Link></li>)
                            }
                          {/* <li><Link href="/" className='block hover:text-gray-300'>Pricing</Link></li> */}
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className=' space-y-3'>
                            <li><a href="/" className='block hover:text-gray-300'>How does it works?</a></li>
                            <li><a href="/" className='block hover:text-gray-300'>Where to ask question?</a></li>
                            <li><a href="/" className='block hover:text-gray-300'>How to play?</a></li>
                            <li><a href="/" className='block hover:text-gray-300'>What is needed for this?</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>contact</h4>
                        <ul className=' space-y-3'>
                            <li><a href="tel:+917703849283" className='block hover:text-gray-300'>+91 77038 49283</a></li>
                            <li><a href="mailto:sachinwebmern@gmail.com" className='block hover:text-gray-300'>sachinwebmern@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-4'>
                    {/* <p>@ xyz z0xx --- 20xx All rights reserved.</p> */}
                    <div className='flex  gap-4'>
                        {/* <img src="" alt="" /> */}
                        <a href='https://www.facebook.com/profile.php?id=100031395428219' target='_blank' className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaFacebookF /></a>
                        <a href='https://www.instagram.com/sachinwebmern369/' target='_blank' className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaInstagram /></a>
                        {/* <a className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaTwitter /></a> */}
                        <a  href='https://www.linkedin.com/in/sachin-kumar-2728b4287/' target='_blank' className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Footer
