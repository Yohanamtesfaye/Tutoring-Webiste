import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { Link, Outlet } from 'react-router-dom'

const TutrorNav = () => {
  return (
    <>
    <div> 
      <div className='flex justify-between p-5 bg-white'>
      <div>Logo</div>
      <div className='flex px-10'>
      <Link to='/tutor' className='text-teal-600 mr-6'>Home</Link>
      <Link to='/tutornotification' className='text-4xl text-teal-600 mr-10'><BiBell/></Link>
      <Link to='/tutorprofile' className='text-4xl text-teal-600 mr-6'><AiOutlineUser/></Link>
      
    </div>
</div>
</div>
<Outlet/>
    </>
    
  )
}

export default TutrorNav