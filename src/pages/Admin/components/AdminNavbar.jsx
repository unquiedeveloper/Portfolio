import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai';
import { toggle } from "../../../redux/slices/navSlice"
import { setPage } from '../../../redux/slices/pageSlice';


function AdminNavbar() {
    const dispatch = useDispatch()
    const toggleNav = useSelector((state) => state.nav.toggleNav);



    return (
        <div>
            <nav className={`bg-white bg-opacity-5 bg-blur-xl text-white w-screen z-10 rounded-xl lg:rounded-none fixed 
       lg:static h-screen lg:h-fit flex flex-col lg:flex-row justify-evenly items-center lg:justify-between border
       border-none lg:border-gray-500 py-10 lg:py-3 lg:px-2 lg:translate-x-0 transition-all
       delay-100 ease-in-out  ${toggleNav ? "translate-x-0" : "-translate-x-full"}`}>
                <AiOutlineClose className='absolute top-5 right-5 text-lg hover:scale-125 cusor-pointer hover:text-red-400
        transition-all lg:hidden '
                    onClick={() => dispatch(toggle())}
                />
                <ul className='text-2xl flex justify-center flex-col lg:flex-row gap-3 lg:gap-2  '>
                    <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60
            hover:shadow-lg px-2 py-1 transition-all outline-none roun ded-md 
            'onClick={() => {
                            dispatch(setPage("CreateProject"))
                            dispatch(toggle())
                            console.log("clicked");
                        }}>Create Project</li>
                    <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60
            hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md '
                        onClick={() => {
                            dispatch(setPage("CreateSkill"))
                            dispatch(toggle())
                            console.log("clicked");
                        }}>Create Skill</li>
                    <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60
                        hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md '
                        onClick={() => {
                            dispatch(setPage("AllProjects"))
                            dispatch(toggle())
                        }}>All Projects</li>
                    <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60
                         hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md '
                        onClick={() => {
                            dispatch(setPage("AllSkills"))
                            dispatch(toggle())
                        }}>All Skills</li>
                </ul>
                <button type='submit' className='text-2xl px-2 py-1 text-center hover:bg-red-400 hover:bg-opacity
            hover-shadow-lg rounded-lg transition-all outline-none '>LogOut</button>
            </nav>
        </div>
    )
}

export default AdminNavbar
