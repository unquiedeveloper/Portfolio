import React from 'react'
import myimg from "../assets/myimg.jpg"
function HomeCard() {
    return (
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justif-between 
        items-center mb-20 lg:mb-36'>
            <div data-aos="fade-up-right" className='flex flex-col gap-5 lg:w-[50%'>
                <h1 className='text-5xl lg:text-7xl mb-10 gradient-text'>hey!</h1>
                <p className='text-gray-300 text-xl lg:text-2xl'>My name is Ayush, and I am a MERN stack Developer. I am 20 years old from india. I have 3 years of workn
                    experience, foucing and creating web applications,
                     design systems that adds growth to your business and more.
                    Over these years, i have developed vrious websites, 
                    conducted workshops and collaborated on diverse projects</p>
                <p className='text-gray-300 text-xl lg:text-2xl'>I'm committed to furthering my skills an achieving 
                    new career. Let's connect and create something amazing togetther</p>
            </div>
            <div data-aos="fade-up-left">
                <img src={myimg} alt="profile"  className='rounded-full 
                mx-auto'/>

            </div>



        </div>
    )
}

export default HomeCard
