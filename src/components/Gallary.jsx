import React from 'react'
import cakeWebsite from '../assets/cakewebsite.png'
import portfolio from '../assets/portfolio.png'
import p_manager from '../assets/purchaseManager.png'
import { TbWorld } from "react-icons/tb";

const Gallary = () => {
  return (
    <section id='gallary' className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Gallary</h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Here is my some website design. </p>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1 flex-col sm:flex-row w-full gap-2 ">
        <div className="flex flex-wrap sm:w-1/2 mx-auto w-full justify-between ">
          <div className="md:p-2 p-1 w-[48%] border-4 group/portfolio border-indigo-600/50 relative overflow-hidden rounded-lg">
            <img src={portfolio} className="w-full  object-cover h-full object-center block"  />
            <div className='transition-all duration-500 absolute top-[100%] left-0  group-hover/portfolio:top-0 bg-slate-800/20 h-full w-full flex items-center justify-center'>
              <a href="https://myportfoliosk.vercel.app/" target='_blank' className=' text-white flex items-center text-sm md:text-base gap-2 bg-indigo-600 hover:bg-indigo-600/90 active:bg-indigo-600/70 transition-all duration-500 px-5 py-1.5 rounded-md'> <TbWorld /> go to website</a>
            </div>
          </div>
          <div className="md:p-2 group/portfolio overflow-hidden p-1 w-[48%] border-4 border-indigo-600/50 relative rounded-lg">
            <img src={p_manager} className="w-full object-cover h-full object-center block"  />
            <div className='transition-all duration-500 absolute top-[100%] left-0  group-hover/portfolio:top-0 bg-slate-800/20 h-full w-full flex items-center justify-center'>
              <a href="https://sujeetsinha.vercel.app/" target='_blank' className=' text-white flex items-center text-sm md:text-base gap-2 bg-indigo-600 hover:bg-indigo-600/90 active:bg-indigo-600/70 transition-all duration-500 px-5 py-1.5 rounded-md'> <TbWorld /> go to website</a>
            </div>
          </div>
          <div className="md:p-2 group/portfolio overflow-hidden p-1 w-full border-2 border-orange-600 mt-5 relative rounded-lg">
            <img src={cakeWebsite}  className="w-full h-full object-cover object-center block"  />
            <div className='transition-all duration-200 absolute top-[100%] left-0  group-hover/portfolio:top-0 bg-slate-800/20 h-full w-full flex items-center justify-center'>
              <a href="https://cakewebsite-sachin.netlify.app/" target='_blank' className=' text-white flex items-center text-sm md:text-base gap-2 bg-indigo-600 hover:bg-indigo-600/90 active:bg-indigo-600/70 transition-all duration-500 px-5 py-1.5 rounded-md'> <TbWorld /> go to website</a>
            </div>
          </div>
        </div>
    {  false &&  <div className="flex flex-wrap sm:w-1/2 w-full ">
          <div className="md:p-2 p-1 w-full">
            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
          </div>
        </div>}
      </div>
    </div>
  </section>
  )
}

export default Gallary
