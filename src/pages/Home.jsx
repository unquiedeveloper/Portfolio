import React, { useEffect } from 'react'
import Portfoliocard from '../components/Portfoliocard'
import HomeCard from '../components/HomeCard'
import AboutCard from '../components/AboutCard'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import Contact from '../components/Contact'
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {

  useEffect(()=>{
    AOS.init({
      duration: 1500,
    })
  },[])
 
  return (
    <div className='w-[80vw] mx-auto'> 
     <Portfoliocard />
     <HomeCard />
     <AboutCard />
     <SkillsSection />
     <ProjectSection />
     <Contact />

      
    </div>
  )
}

export default Home
