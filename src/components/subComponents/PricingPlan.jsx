import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";


const PricingPlan = ({service_planing}) => {
  
    return (
        <>
{ service_planing &&
          service_planing.map((pkg, index)=> <div key={index} className='border py-10 mb:px-6 px-4 rounded-lg shadow-3xl overflow-hidden '>
            <h3 className='text-3xl text-primary font-bold text-center'> {pkg.name}</h3>
            {/* <p className='text-tartiary text-center my-5'>{pkg.description}</p> */}
          <p className='mt-5 text-center text-secondary text-4xl font-bold'> &#8377;{pkg.price}</p>
          <div className='max-h-[260px] overflow-auto bg-slate-50/70 '>

          
          <ul className=' mt-4 space-y-2 px-4 '>
            {
                pkg.listOffer.map((dtl,di) =>  <li className='flex gap-3 items-center'><span className='max-w-3 max-h-3 min-w-3 min-h-3 rounded-2xl bg-green-600'></span>{dtl}</li> )
            }
  
          </ul>
          </div>

          <div className='text-center mt-8'>
          <a href={`https://api.whatsapp.com/send?phone=+917703849283&text=hey, can you build a website for my shop. I am interested in ${pkg.name}, give me more information about it`} className="btnPrimary "> <IoLogoWhatsapp className='text-green-200 md:text-2xl text-xl inline-block align-middle ps-1'/> Get Started</a>
          </div>
             </div>)
        }
        </>
    )
}

export default PricingPlan
