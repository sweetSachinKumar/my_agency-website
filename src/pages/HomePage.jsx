import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import { FaWhatsapp } from "react-icons/fa";
import Home from '../components/Home'
import Gallary from '../components/Gallary'
import Procedure from '../components/Procedure'
import Feature from '../components/Feature'
const HomePage = () => {

  const [isActive, setIsActive] = useState(false)

  window.addEventListener('scroll', ()=> {
    window.scrollY > 560 ? setIsActive(true): setIsActive(false)
  })
 


  return (
    <>

      <Navbar isActive={isActive} />
      <Home/>
      <Feature/>
      <Pricing/>
{/* <MyServicePrice /> */}
      <Gallary />
      

      <Procedure/>
      {/* <Banner/> */}
      {/* <Feature/> */}
      {/* <About/> */}
      {/* <Pricing/> */}
      {/* <Newsletter/> */}
      <Footer/>
  { isActive &&  <div className='fixed bottom-16 right-8 bg-green-600 hover:bg-green-600/90 active:bg-green-600/80 md:w-16 md:h-16 w-10 h-10 flex items-center justify-center  rounded-full'> 
   <a href='https://api.whatsapp.com/send?phone=+917703849283&text=hey, can you build a website for my shop. give me more information about it' target="_blank" className='text-white md:text-3xl text-xl ' >
 <FaWhatsapp />  
    </a> 
    </div>
    }
    
    </>
  )
}

export default HomePage
