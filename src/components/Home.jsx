import React from 'react'
import bannerIMG from '../assets/building_websites.svg'
import { IoLogoWhatsapp } from "react-icons/io";

 
const Home = () => {
  return (
    <section id='home' className="text-color4 lg:pt-12 bg-color3">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={bannerIMG} />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-semibold text-color1">Professional Web Designer & Developer</h1>
        <p className="mb-8 leading-relaxed text-color2">Get a Professional website for your  business and we will grow your business with new technologies. <strong>Get Low cost Website Design in Just &#8377;3800.</strong> </p>
        <div className="flex justify-center">
          <a href='https://api.whatsapp.com/send?phone=917703849283&text=hey, can you build a website for my shop. give me more information about it' 
          target='_blank' 
          className="inline-flex text-color1 bg-color4 border-0 py-2 px-6 
          focus:outline-none hover:bg-color4/90  rounded text-lg  gap-2 items-center"> <IoLogoWhatsapp className='text-green-500'/> contact me</a>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg  gap-2 items-center"> <FaYoutube/> Button</button> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home
