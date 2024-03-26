import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#201658] p-5'  >
      <div className='text-white'>
        Logo
      </div >
      <div className='flex text-white'>
      <Link className='mr-20 hover:text-gray-400' to='/'>Home</Link>
        <Link className='mr-20 hover:text-gray-400' to='/register'>Register</Link>
        <Link className=' mr-20 hover:text-gray-400' to=''>About Us</Link>
        <Link to='' className='mr-20 hover:text-gray-400'>How It Works</Link>
        <Link to='login' className='mr-20  bg-[#FFC700] px-5 py-1 text-black hover:bg-white rounded-lg'>Login</Link>
        <Link to='/register' className='mr-20 bg-[#FFF455] px-5 py-1 text-black hover:bg-white rounded-lg'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar