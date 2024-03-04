import React, { useState } from 'react'

function CreateProject() {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [selectedImg, setSelectedImg] = useState("")
    const [githubUrl, setGithubUrl] = useState("")
    const [hostedUrl, setHostedUrl] = useState("")

    const handleImg = (e)=>{
        const file = e.target.files[0];
        setSelectedImg(file)
    }
    const addProject = async(e)=>{
        e.preventDefault();
        if(!name || !desc || !selectedImg){
            return console.log("plz fill all the req details");
        }
        

    }
  return (
    <div className='p-3 backdrop-blur rounded-md w-fit mx-auto mt-10'> 
        <h1 className='text-3xl lg:text-5xl text-white mb-5'>Create Project</h1>
        <form className='flex flex-col gap-3 ' onSubmit={addProject}>
            <input onChange={(e)=> setName(e.target.value)} value={name}
            className='bg-transparent px-3
            py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl
            gradient-text' type="text" name='name' id='name' placeholder='Project name' required/>
            <textarea onChange={(e)=> setDesc(e.target.value)} value={desc} className='bg-transparent px-3
            py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl
            gradient-text' name="desc" id="desc" cols="30" rows="8" placeholder='Project Description' required></textarea>
            <div>
                <label htmlFor="img" className='text-white text-xl gradient-text'>
                    Project Image:
                </label>
                <input  onChange={handleImg} type="file" name='img' id='img' accept='image' required />
            </div>
            <input onChange={(e)=> setGithubUrl(e.target.value)} value={githubUrl}
             className='bg-transparent px-3
            py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl
            gradient-text' type="url" name="githubUrl" id="githubUrl" placeholder='github Url' />
            <input  onChange={(e)=> setHostedUrl(e.target.value)} value={hostedUrl}
             className='bg-transparent px-3
            py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl
            gradient-text' type="url" name="hostedUrl" id="hostedUrl" placeholder='Hosted Url' />
            <button className='bg-purple-500 px-3 py-2 border rounded-full mx-auto 
            w-[40vw] lg:w-[10vw] font-bold text-l' type='submit'>Add Project</button>
        </form>
      
    </div>
  )
}

export default CreateProject
