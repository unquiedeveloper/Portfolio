import React from 'react'

function SkillsCard({title , value}) {
  return (
    <div className='flex justify-between items-center mt-5 background-blur-xl shadow-xl
    p-3 border-2 rounded-lg border-gray-400 mr-2'>
        <h3 className='font-bold text-xl text-white '>{title}</h3>
        <progress className='progress-bar' max="100" value={value}> </progress>
      
    </div>
  )
}

export default SkillsCard
