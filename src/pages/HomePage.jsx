import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import { FaWhatsapp } from "react-icons/fa";
import Home from '../components/Home'
import Gallary from '../components/Gallary'
import Procedure from '../components/Procedure'
import Feature from '../components/Feature'
import { motion } from 'framer-motion'
import { whatsAppNo } from '../data';

const HomePage = () => {


  const [isActive, setIsActive] = useState(false)

  window.addEventListener('scroll', () => {
    window.scrollY > 560 ? setIsActive(true) : setIsActive(false)
  })

  return (
    <>

      <Navbar isActive={isActive} />
      <Home />
      <Pricing />
      <Gallary />
      <Feature />
      <Procedure />
      <Footer />


      {isActive && <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ stiffness: 200 }}
        exit={{ opacity: 0, y: 50 }}
        className='fixed bottom-16 right-8 bg-green-600 hover:bg-green-600/90
   active:bg-green-600/80 w-14 h-14 flex items-center justify-center
    duration-700 rounded-full shadow-xl shadow-neutral-600/20'>
        <a href={`https://api.whatsapp.com/send?phone=+${whatsAppNo}&text=hey, can you build a website for my shop. give me more information about it`} target="_blank" className='text-white md:text-3xl text-2xl ' >
          <FaWhatsapp />
        </a>
      </motion.div>
      }

    </>
  )
}

export default HomePage
