import React from 'react'
import step1 from '../assets/connect.svg'
import step2 from '../assets/analysis.svg'
import step3 from '../assets/devWeb.svg'
const Procedure = () => {
  return (
    <section className="text-gray-600 bg-indigo-50 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">How to Start your Project?</h1>
          <div className="h-1 w-20 bg-purple-500 rounded"> </div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">are you Ready to make your digital dreams in reality? if yes, then I am very excited to build simplified hi-tech website for your shop.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-contain object-center mb-6" src={step1} alt="content"/>
            <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">Step 1:</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Understand Your Needs</h2>
            <p className="leading-relaxed text-base">We will start by discussing your Project requirements to ensure. Through the Conversations, we will be gathering all the necessary details. </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-contain object-center mb-6" src={step2} alt="content"/>
            <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">Step 2:</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Plan & Proposal</h2>
            <p className="leading-relaxed text-base">After Understanding your needs, i will give you a detailed plan, including project scope, timeline and cost estimation. This Proposel will be align with your expectations.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-contain object-center mb-6" src={step3} alt="content"/>
            <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">Step 3:</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> Develop & Collaborate</h2>
            <p className="leading-relaxed text-base">Upon your approval, I will start developing your website. I will Keep you updated at every milstone. I would  love to have feedback from you throughout the process.</p>
          </div>
        </div>
        {/* <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
            <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default Procedure