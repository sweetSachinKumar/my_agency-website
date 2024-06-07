import React from 'react'
import cake5 from '../assets/cake5img.png'
import cake1 from '../assets/cake1.png'
import cake2 from '../assets/cake2.png'
import portfolio from '../assets/portfolio.png'
import Slider from 'react-slick'


const Gallary = () => {
  const portfolioWebsiteArr = [
  
    {
      imgUrl: cake2, 
      title:"cake website template1", 
      description:"light/dark mode . more than one laguage . mobile friendly ",
       websiteLink:"https://cakesite4.netlify.app/" 
      },
      {
        imgUrl: cake5, 
        title:"cake website template5", 
        description:"all products from google Sheet . loading Product . product detail . add to wishList . share website on socila media",
         websiteLink:"https://cakesite5.netlify.app/" 
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





  const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
   autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
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
    <section id='gallary'  className=" text-gray-600 body-font">
    <div  className="  container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-12 flex-wrap" >
        <h1 className="sm:text-3xl capitalize text-2xl font-semibold title-font text-color3 lg:w-1/3 lg:mb-0 mb-4 py-0.5 bg-color2 px-2 font-[Poppins]">portfolio</h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-lightG">Here is my some awesome website design. </p>
      </div>
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8 */}
    <div className=' w-[90%]
     max-w-screen-xl mx-auto container'>
      <Slider {...settings}>
     {
      portfolioWebsiteArr?.map((item, i) => {
        return (
          <div key={i} className=' sm:w-full pt-6 px-0 shadow-xl bg-neutral-100 shadow-neutral-600/20  transition-all hover:shadow-neutral-600/5  max-w-[420px] w-[90%] mx-auto h-full bg-face/40rounded-sm'> 
          <div>
          <img src={item.imgUrl} className='object-cover object-center w-full h-full bg-color2 shadow-sm shadow-color4/30 rounded-sm' alt="" />
          </div>
          <div className=' px-4 md:px-6  pb-4 md:pb-8 flex flex-col items-start justify-start'>
          <h3 className='text-baise md:text-lg lg:text-xl font-medium text-color4 mt-4 font-[Poppins]'>{item.title}</h3>
          <p className='text-sm mt-2'>{item.description} </p>
          <div className='mt-6 md:mt-8 w-full'>
          <a href={item.websiteLink} target='_blank' 
          className='bg-color3 active:bg-color3/80 shadow-xl shadow-neutral-600/10 hover:shadow-neutral-600/0 text-color1 
           text-center block  w-full  py-1.5 px-8 rounded-md' >go to Website</a>
           </div>
           </div>
        </div>
        )
      })
      
      }
   </Slider>
     
    </div>
    </div>
  </section>
  )
}

export default Gallary
