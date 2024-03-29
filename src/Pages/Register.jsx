import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-[#98ABEE] h-screen'>Register
    <Link to="/studentRegistration">register as a student</Link>
    <break/>
    <Link to="/tutorregistration">register as a tutor</Link></div>
  )
}

export default Register