import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between bg-white p-5'  >
      <div className='text-black'>
        Logo
      </div >
      <div className='flex text-black'>
      <Link className='mr-20 hover:text-gray-400' to='/'>Home</Link>
        <Link className='mr-20 hover:text-gray-400' to='/register'>Register</Link>
        <Link className=' mr-20 hover:text-gray-400' to='/client'>Find a tutor</Link>
        <Link to='/tutor' className='mr-20 hover:text-gray-400' >Tutor</Link>
        <Link to='login' className='mr-20 bg-[#4a154b] text-white font-bold border border-[#4a154b] px-6 py-1 hover:text-[#4a154b] hover:bg-white rounded-lg'>Login</Link>
        <Link to='/register' className='mr-20 bg-[#4a154b] px-5 py-1 font-bold text-white rounded-lg hover:text-[#4a154b] border hover:bg-white'>Sign Up</Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar