import React from 'react'
import ProjectCard from './ProjectCard'
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import {useRef} from "react"

function ProjectSection() {
    const scrollRef = useRef(null);

    const hScrollright = ()=>{
        scrollRef.current.scrollLeft += 500;

    }

    const hScrollleft = ()=>{
        scrollRef.current.scrollLeft -= 500;

    }
  return (
    <div data-aos="fade-down" className='m-20 lg:mb-36'>
        <h1 className='text-5xl lg:text-7xl gradient-text mb-10'>My Projects</h1>
        <div ref={scrollRef} className='flex overflow-x-scroll gap-8 lg:p-3 scroll-hide'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        </div>
        <div className='flex justify-center items-center gap-3 mt-2 select-none'>
            <HiArrowLeft onClick={hScrollleft} className='text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block' />
            <h2 className='gradient-text font-mono text-lg uppercase'>Slide for more</h2>
            <HiArrowRight onClick={hScrollright} className='text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block'/>
        </div>
      
    </div>
  )
}

export default ProjectSection
