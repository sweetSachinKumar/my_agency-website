import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";


const PricingPlan = ({ service_planing }) => {

  return (
    <>
      {
        service_planing &&
        service_planing.map((pkg, index) => <div key={index} className='border pb-10 mb:px-6 px-4 rounded-lg shadow-3xl overflow-hidden pt-4'>
          <div className='bg-color4/95 mb-0.5 text-color1 py-4 rounded-md'>
            <h3 className=' text-lg md:text-3xl  font-bold text-center'> {pkg.name}</h3>
            <p className='mt-5 text-center text-color2 text-2xl md:text-4xl font-bold'> {pkg.price} &#8377;/month</p>
          </div>
          <div className='max-h-[260px] min-h-[240px] overflow-auto bg-slate-50/70 '>

            <ul className=' mt-4 space-y-2 px-4 '>
              {
                pkg.listOffer.map((dtl, di) => <li className='flex gap-3 items-center text-neutral-600'><span className='max-w-3 max-h-3 min-w-3 min-h-3 rounded-2xl bg-green-600'></span>{dtl}</li>)
              }
            </ul>
          </div>

          <div className='text-center mt-8'>
            <a href={`https://api.whatsapp.com/send?phone=+917703849283&text=hey, can you build a website for my shop. I am interested in ${pkg.name}, give me more information about it`}
              className="md:text-xl font-medium bg-color4 px-4 py-2 rounded-lg text-color1 "> <IoLogoWhatsapp className='text-green-500 md:text-2xl text-xl inline-block align-middle ps-1' /> Get Started</a>
          </div>
        </div>)
      }
    </>
  )
}

export default PricingPlan
