import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between  bg-white p-5'  >
      <div className='text-black'>
        Logo
      </div >
      <div className='flex text-black'>
      <Link className='mr-20 hover:text-gray-400' to='/'>Home</Link>
        <Link className='mr-20 hover:text-gray-400' to='/register'>Register</Link>
        <Link className=' mr-20 hover:text-gray-400' to=''>About Us</Link>
        <Link to='' className='mr-20 hover:text-gray-400'>How It Works</Link>
        <Link to='login' className='mr-20  bg-[#4a154b] px-5 py-1 text-white font-bold hover:bg-white border hover:text-[#4a154b] border-[#4a154b] rounded-lg'>Login</Link>
        <Link to='/register' className='mr-20 bg-[#4a154b] px-5 py-1 text-white font-bold hover:bg-white hover:text-[#4a154b] border border-[#4a154b] rounded-lg'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar