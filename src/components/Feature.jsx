import React from 'react'
import feature1 from '../assets/percentages.svg'
import {motion} from 'framer-motion'
// varients 
 import { fadein } from './variants'
 import fchr1 from '../assets/WebsCreator.svg'
 import fchr2 from '../assets/Responsive_web.svg'
 import fchr3 from '../assets/inc_costomer.svg'

const Feature = () => {
  return (
    <div className='py-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
        <div className='lg:w-1/4'>
            <h3 className=' text-gray-900 font-bold text-3xl lg:w-1/2'>Why we are better than others</h3>
            <p className='text-base text-tartiary'>I am focus on client and costomer setisfaction as the ultimate goal for our projects. I create website by coding that helps me to create best features and design in website <span className='font-semibold text-primary/80'>with 100% Guaranteed Quality</span>. My pricing modals are flexible, ensuring that you get the best value from your investment in web development.</p>
            {/* ( HTML, CSS, JavaScript, React.js, Tailwind CSS)  */}
        </div>
        
        {/* featured card  */}
        <div className='lg:w-3/4 w-full'>
           <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>
           <div  className=' cursor-pointer bg-[rgb(255,255,255)]/10 shadow-3xl rounded-[35px] p-8 flex items-center justify-center h-96 hover:-translate-y-5 transition-all duration-300'>
                <div  >
                  <img src={fchr1} alt="img1" className='max-h-[150px] mx-auto max-w-[150px] border-4'/>
                  <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>create website in Affordable Price</h5>
                </div>
            </div>
            <div  className=' md:mt-16 cursor-pointer bg-[rgb(255,255,255)]/10 shadow-3xl rounded-[35px] p-8 flex items-center justify-center h-96 hover:-translate-y-5 transition-all duration-300'>
                <div  >
                  <img src={fchr2} alt="img1" className='max-h-[150px] mx-auto max-w-[150px] border-4'/>
                  <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Responsive and Mobile Friendly Websites</h5>
                </div>
            </div>
            <div className='cursor-pointer  bg-[rgb(255,255,255)]/10 shadow-3xl rounded-[35px] p-8 flex items-center justify-center h-96 hover:-translate-y-5 transition-all duration-300'>
                <div >
                  <img src={fchr3} alt="img1" className='max-h-[150px] mx-auto max-w-[150px] border-4'/>
                  <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Grow Your costomer</h5>
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
