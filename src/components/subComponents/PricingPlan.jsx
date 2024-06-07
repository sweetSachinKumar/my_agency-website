import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import Slider from 'react-slick';


const PricingPlan = ({ service_planing }) => {



  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    arrows: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };




  return (
    <>
      <Slider {...settings} >
        {
          service_planing &&
          service_planing.map((pkg, index) => {
            return (
              <div key={index} className='border pb-10 mb:px-6 sm:px-4 rounded-lg shadow-xl shadow-neutral-700/20 overflow-hidden sm:pt-4'>
                <div className='bg-color4/95 mb-0.5 text-color1 py-4 rounded-md flex flex-col'>
                  <h3 className=' text-lg lg:text-3xl  font-bold text-center'> {pkg.name}</h3>
                  <p className='mt-5 text-center text-color2 text-2xl lg:text-4xl font-bold'> {pkg.price} &#8377;/month</p>
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
                    className="lg:text-xl font-medium bg-color4 px-4 py-2 rounded-lg text-color1 "> <IoLogoWhatsapp className='text-green-500 md:text-2xl text-xl inline-block align-middle ps-1' /> Get Started</a>
                </div>
              </div>

            )
          }

          )
        }
      </Slider>
    </>
  )
}

export default PricingPlan
