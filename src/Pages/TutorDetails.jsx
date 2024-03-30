import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '@mantine/core';

const TutorDetails = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3031/tutors/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);
  return (
    
    <div className='p-10 bg-[#F4EDE4]  lg:flex'> 
    <div>
    <div className=' flex shadow-lg p-10 rounded-xl h-72 my-10 bg-white ml-20 '>
        <div className='p-2  text-white font-bold'>
          <img src={data.image} className='h-52 w-52' />
        </div> 
        <div className=' py-8 ml-10'>
          <div className='font-serif mt-2  text-gray-500 font-bold'>{data.education}</div>
          <div className=' text-2xl mt-2 font-serif font-bold'>{data.name} </div>
          <div className='mb-5 font-serif mt-2 text-gray-500 font-bold'> {data.bio} </div>
          <div className='font-bold'><FaMapMarkerAlt className='inline-block text-[#4a154b]'/> {data.location}</div>
        </div>
      </div>
      <div className=' flex shadow-lg p-10 rounded-xl my-10 bg-white ml-20 '>
        <div>
          <p className='text-[#4a154b] font-serif font-bold text-2xl mb-3'>About Me</p>
          <p className='mb-10'>{data.Description}</p>
          <hr className='border-[#4a154b] border-t-3' />
          <p className='font-bold text-[#4a154b] mt-10'>Education</p>
          <li className='text-gray-500'>{data.Uni}</li>
          <li className='text-gray-500'>{data.education}</li>
          <hr className='border-[#4a154b] mt-10 border-t-3' />
          <p className='font-bold text-[#4a154b] py-3 '>Grade Level</p>
          <div style={{ display: 'flex' }}>
  {data.level && Array.isArray(data.level) && data.level.map((element, index) => (
    <div  className='text-white font-bold mr-3 py-1 border border-[#4a154b] px-2 bg-[#4a154b] ' key={index}>{element}</div>
  ))}
</div>

          <hr className='border-[#4a154b] mt-10 border-t-3' />
          <p className='font-bold text-[#4a154b] py-3'>Subjects</p>
          <div className='flex'>
            {data.subjects && data.subjects.map((element, index) => (
            <div className='text-white font-bold mr-3 py-1 border border-[#4a154b] px-2 bg-[#4a154b] ' key={index}>{element}</div>
            ))}
          </div>
          <hr className='border-[#4a154b] mt-10 border-t-3' />
          <p className='font-bold text-[#4a154b] py-3'>Working Days</p>
          <div className='flex'>
            {data.workingDay && data.workingDay.map((element, index) => (
            <div className='text-white font-bold mr-3 py-1 border border-[#4a154b] px-2 bg-[#4a154b] ' key={index}>{element}</div>
            ))}
          </div>
          
          
        </div>
      </div>
    </div>
      <div className=' w-1/3'>
        <div className='ml-5 flex shadow-lg p-10 rounded-xl mt-10 h-96 bg-white'>
        <div className=' py-8'>
              <div className=' text-2xl font-serif font-bold ml-8 text-[#4a154b]'>contact {data.name} </div>
                <div className='font-seri font-bold mt-3'><FaCheckCircle className='text-[#4a154b]  inline-block'/> Verified Tutor</div>
                <Button  className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] px-20 mt-5 ml-5'>Online sessions</Button>
                <Button  className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] px-[71px] mt-5 ml-5'>Inperson sessions</Button>
                <Button  className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] px-[75px] mt-5 ml-5'>Send a Message</Button>
              </div>
        </div>
        <div className=' text-2xl font-serif font-bold ml-32 mt-5 underline text-[#4a154b]'>How It Works</div>
        <div className='ml-5 flex shadow-lg p-10 rounded-xl mt-5 h-52 bg-white '>
        <div>
              <div className=' text-xl font-serif font-bold ml-2 text-[#4a154b]'>What is an Online session </div>
              <div><p className='text-black font-bold font-serif text-sm mt-3'>This signifies that this specific tutor is open to conducting online sessions. By selecting this button, you acknowledge your agreement to enroll in virtual tutoring sessions with them.</p></div>
                
              </div>
        </div>
        <div className='ml-5 flex shadow-lg p-10 rounded-xl mt-5 h-64 bg-white '>
        <div>
              <div className=' text-xl font-serif font-bold ml-1 text-[#4a154b]'>What is an InPerson session </div>
              <div><p className='text-black font-bold font-serif text-sm mt-3'>This signifies that this specific tutor is open to conducting Inperson sessions. By selecting this button, you acknowledge your agreement to enroll in An inperson tutoring sessions with them.</p></div>
                
              </div>
        </div>
        <div className='ml-5 flex shadow-lg p-10 rounded-xl mt-5 h-52 bg-white '>
        <div>
              <div className=' text-xl font-serif font-bold ml-3 text-[#4a154b]'>How does Message Works </div>
              <div><p className='text-black font-bold font-serif text-sm mt-3'>If you wish to inquire further before making a decision to hire, you have the option to message your tutor to address any specific queries you may have, prior to taking any further steps.</p></div>
                
              </div>
        </div>
      </div>
      
      {/* <p>{data.Description}</p>
      <p>school Id :{data.id}</p>
      <p>Current Universtity: {data.Uni}</p> */}
    </div>
  )
}

export default TutorDetails