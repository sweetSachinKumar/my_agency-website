import React  from 'react' 
import PricingPlan from './subComponents/PricingPlan'
import { service_planing } from './pricing_website'


const Pricing = () => {


  return (
    <div className='pricing mb:px-14 p-4 max-w-screen-2xl mx-auto py-10' id='pricing'>
      <div className="text-center">
        <h2 className='md:text-5xl text-3xl mb-3 font-bold text-color3 font-[Poppins]'>Here are <span className='bg-color2 px-1'>all our plans</span> </h2>
        <p className='text-color4 max-w-[700px] lg:w-1/2 mx-auto px-4'>I offer budget-friendly solutions to meet your requirements. choose your best plan without compromising your budget.</p>
        <span className='text-color4/80'>get One Page <strong>Mobile friendly website</strong></span>
      </div>
      {/* pricing card  */}
      {/* grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 */}

      <div  className='w-[90%] mt-4 md:mt-16 h-full mx-auto'>
      { service_planing && <PricingPlan service_planing={service_planing}/>}
        </div>

      
    </div>
  )
}

export default Pricing
