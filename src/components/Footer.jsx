import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll';
import { countryCode, phoneNo1, phoneNo2 } from '../data';
const Footer = () => {
    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "Pricing", path: "pricing" },
        { link: "Gallary", path: "gallary" },
    ]

    return (
        <nav className=' bg-[#010051]/95ss bg-color4 text-white md:px-8 lg:px-14 p-4 max-w-screen-2xl mx-auto '>
            <div className='my-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 '>

                <div className='md:w-1/2 space-y-8'>
                    <span className='text-white font-semibold mx-2 lg:mx-4 my-2 inline-block text-xl md:text-2xl'> <span className='bg-white ps-2 pe-1 text-primary me-[1px]'>Sachin</span>WebDev</span>
                    <p className=' '>hello, my name is Sachin Kumar. I am professional web Developer. I create web site in Low cost. </p>
                    {/* <div>
                        <input type="email" name="email" id="email" placeholder='Your email...' className='bg-[#9a7af159] py-2 px-4 focus:outline-none' />
                        <input type="submit" value="subcribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-primary' />

                    </div> */}
                    <div className='flex  gap-4'>
                        {/* <img src="" alt="" /> */}
                        <a href='https://www.facebook.com/profile.php?id=100031395428219' target='_blank' className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaFacebookF /></a>
                        <a href='https://www.instagram.com/sachinwebmern369/' target='_blank' className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaInstagram /></a>
                        {/* <a className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaTwitter /></a> */}
                        <a href='https://www.linkedin.com/in/sachin-kumar-2728b4287/' target='_blank' className='w-8 h-8  border-2 hover:-translate-y-2 transition-all duration-200 flex items-center justify-center rounded-md cursor-pointer'><FaLinkedinIn /></a>
                    </div>

                </div>
                {/* footer navigation  */}
                {/* <div className='md:w-2/3  flex flex-col md:flex-row  justify-between gap-8 items-start flex-wrap'> */}
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className=' space-y-3'>
                            {
                                navItems.map(item => <li key={item.path}><Link to={item.path} spy={true} smooth={true} activeClass='active' className='block cursor-pointer hover:text-gray-300'>{item.link}</Link></li>)
                            }
                            {/* <li><Link href="/" className='block hover:text-gray-300'>Pricing</Link></li> */}
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Blogs</h4>
                        <ul className=' space-y-3'>
                            <li><a href="/" className='block hover:text-gray-300'>How does it works?</a></li>
                            <li><a href="/" className='block hover:text-gray-300'>why should i have website for my shor or business?</a></li>
                            <li><a href="/" className='block hover:text-gray-300'>How to use website for my shops?</a></li>
                            <li><a href="/" className='block hover:text-gray-300'>What is needed for this?</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>contact</h4>
                        <ul className=' space-y-3'>
                            <li>
                                <a href={`tel:+${countryCode}${phoneNo2}`} className='block hover:text-gray-300'>
                                    +{countryCode} {phoneNo2.slice(0, 5) + " " + phoneNo2.slice(5)}
                                </a>
                                <a href={`tel:+${countryCode}${phoneNo1}`} className='block hover:text-gray-300'>
                                    +{countryCode} {phoneNo1.slice(0, 5) + " " + phoneNo1.slice(5)}
                                </a>
                            </li>
                            <li><a href="mailto:sachinwebmern@gmail.com" className='block hover:text-gray-300'>sachinwebmern@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

             
<hr />
                <p className='text-center text-xs font-medium text-neutral-400 font-[Arial] my-4'>
                SachinWebDev &copy; copyright 2024 All rights reserved
                </p>

        </nav>
    )
}

export default Footer
