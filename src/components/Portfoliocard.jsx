import React from 'react'

function Portfoliocard() {
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className='px-5 lg:p-5 text-white w-[80vw] lg:w-[30vw] backdrop-blur-md 
    border-gray-500 select-none rounded-2xl my-20 lg:my-[200px] hover:scale-110 
    transition-all delay-100 hover:border-white shadow-lg portfolio-card'>
       <h3 className='text-4xl lg:text-6xl font-bold py-3 
       border-2 border-transparent border-b-gray-400'>Portfolio</h3>
       <h3 className='text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400'>Ayush</h3>
       <h3 className='text-xl lg:text-2xl py-3'>MERN STACK Developer</h3>
    </div>
  )
}

export default Portfoliocard
