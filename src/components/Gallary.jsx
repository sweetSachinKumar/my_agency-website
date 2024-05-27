import React from 'react'
import cake1 from '../assets/cake1.png'
import cake2 from '../assets/cake2.png'
import portfolio from '../assets/portfolio.png'


const Gallary = () => {
  const portfolioWebsiteArr = [
    {
      imgUrl: cake2, 
      title:"cake website template1", 
      description:"light/dark mode . more than one laguage . mobile friendly ",
       websiteLink:"https://cakesite4.netlify.app/" 
      },
    {
      imgUrl: cake1, 
      title:"cake website template2", 
      description:"all products . product detail . add to wishList . mobile friendly ",
       websiteLink:"https://cakesite3.netlify.app/" 
      },
    {
      imgUrl: portfolio, 
      title:"portfolio website ", 
      description:"simple website . dark / light mode",
       websiteLink:"https://myportfoliosk.vercel.app/" 
      }
  ]
  return (
    <section id='gallary'  className=" text-gray-600 body-font">
    <div  className="  container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-12 flex-wrap" >
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-color3 lg:w-1/3 lg:mb-0 mb-4 py-0.5 bg-color2 px-2 font-[Poppins]">Gallary</h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-lightG">Here is my some website design. </p>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8 max-w-screen-xl mx-auto container'>
     {
      portfolioWebsiteArr?.map((item, i) => {
        return (
          <div key={i} className=' sm:w-full shadow-xl bg-neutral-100 shadow-neutral-600/20  transition-all hover:shadow-neutral-600/5  max-w-[420px] w-[90%] mx-auto h-full bg-face/40 px-4 md:px-6 pt-6 pb-4 md:pb-8 rounded-sm'> 
          <div>
          <img src={item.imgUrl} className='object-cover object-center w-full h-full bg-color2 shadow-sm shadow-color4/30 rounded-sm' alt="" />
          </div>
          <h3 className='text-lg md:text-xl font-medium text-color4 mt-4 font-[Poppins]'>{item.title}</h3>
          <p className='text-sm mt-2'>{item.description} </p>
          <div className='mt-6 md:mt-8'>
          <a href={item.websiteLink} target='_blank' 
          className='bg-color3/70 shadow-xl shadow-neutral-600/10 hover:shadow-neutral-600/0 text-color1 
           text-center  py-1.5 px-8 rounded-md' >go to Website</a>
           </div>
        </div>
        )
      })
      
      }
   
     
    </div>
    </div>
  </section>
  )
}

export default Gallary
