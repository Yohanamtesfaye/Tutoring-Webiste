import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TutorInfo from '../Comonents/TutorInfo';
const Client = () => {

  const [data, setdata] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3031/tutors')
    .then(res=>setdata(res.data))
    .catch(err=> console.log(err));
  },[])
  return (
    <div className=' w-full bg-[#F4EDE4]'>
      <div className='ml-20 pt-20'>
        <h1 className='text-4xl font-serif font-bold text-black'>Private Tutors that fit your Schedule</h1>
        <p className='px-4 text-xl text-gray-600'>Find your perfect private tutor and arrange a Free Video Meeting. Then book <br />one-to-one Online Lessons to fit your schedule.</p>
        <button className='px-4 py-2 mt-5 ml-4 bg-[#4a154b] font-bold text-white rounded-lg hover:text-[#4a154b] border hover:bg-white'>Book A Tutor</button>
      </div>
      <div className='flex justify-between px-40 mt-10'>
      <div>
        <select className='inline-block bg-gray-100 border mt-5 font-bold text-gray-600 px-28 py-1 rounded-lg ' id="">
          <option value="">Subject</option>
          <option value="all">All</option>
          <option value="en">English</option>
          <option value="mat">Maths</option>
          <option value="gs">General Science</option>
          <option value="ss">Social Studies</option>
          <option value="ot">Other</option>
      </select>
      </div>
      <div>
        <select className='inline-block bg-gray-100 border mt-5 font-bold text-gray-600 px-28 py-1 rounded-lg ' id="">
          <option value="">Site</option>
          <option value="aastu">AASTU</option>
          <option value="astu">ASTU</option>
          <option value="aau">AAU</option>
          <option value="ju">JU</option>
          <option value="gu">GU</option>
      </select>
      </div>
      <div>
        <select className='inline-block bg-gray-100  border mt-5 text-gray-600 font-bold px-28 py-1 rounded-lg ' id="">
          <option value="am">Level</option>
          <option value="en">PreSchool</option>
          <option value="or">Middle School</option>
          <option value="or">High School</option>
          <option value="or">Collage</option>
      </select>
      </div>
      </div>

      {data.map((d) => (
          <TutorInfo key={d.id} data={d} />
        ))}
      
       
    </div>
  )
}

export default Client