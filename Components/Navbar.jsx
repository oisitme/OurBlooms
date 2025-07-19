import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar=()=>{
const navigate=useNavigate();
const[menuOpen,setMenuOpen]= useState(false);

    return(
    <>
     <div className='flex justify-between items-center bg-white px-10 py-5 fixed top-0 left-0 w-full z-50 shadow'>      
        <button onClick={() => navigate('/')} className=' text-2xl  '><FontAwesomeIcon icon={faHouse} /></button>       
     
     <button className='md:hidden' onClick={()=> setMenuOpen(!menuOpen)} aria-label='Toggel menu'>
      <FontAwesomeIcon icon={menuOpen ? faTimes:faBars} size="2x" />
     </button>
     <div className='hidden md:flex items-center text-lg font-bold gap-7'>
     <NavLink to='/Gallery'> Gallery</NavLink>
     <NavLink to='/about'>About</NavLink>
     <NavLink to='/contact'>Contact</NavLink>
     </div>   
     {menuOpen && (
      <div className="absolute top-full right-5 bg-white shadow-md rounded-md flex flex-col items-start text-lg font-bold gap-2 p-4 md:hidden z-50">
         <NavLink to='/gallery' >Gallery</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
      </div>
     )}  
     </div>
     <hr className='border-b-1 border-black-300'></hr>
     </>
     
    )
}
export default Navbar;
