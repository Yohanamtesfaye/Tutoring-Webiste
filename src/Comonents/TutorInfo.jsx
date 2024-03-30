import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorInfo = ({data}) => {
  const id = data.id;
  const value = `/tutordetail/${id}`;
  return (
    <Link to={value}>
    <div className=' ml-10 mr-10 flex shadow-lg p-10 rounded-xl my-10 bg-white transition-transform hover:shadow-3xl hover:shadow-[#4a154b] hover:-translate-y-3'>
     <div>
        <img src={data.image}  width={'1000px'} />
        <div className='px-3 ml-10'>{data.rating}⭐ <FaMapMarkerAlt className='inline-block text-red-500 ml-12 mr-1'/> {data.location}</div>
     </div> 
         <div className=' ml-10 mt-16'>
      <div className='mt-5 text-2xl font-serif font-bold hover:text-[#4a154b] '> {data.name}</div>
      <div className='mb-5'> {data.email} </div>
       <div className='max-w-prose' style={{ maxWidth: '130ch' }}><p className='line-clamp-5'>{data.Description} </p>  </div>
       
    </div>
    <div className= 'px-44'>
     <div>
       <button className='px-20 py-2 ml-4 mt-40 bg-[#4a154b] font-bold text-white rounded-lg hover:text-[#4a154b] border hover:bg-white'>Contact {data.name}</button>
     </div>
     </div>
       </div>
       </Link>
  )
}

export default TutorInfo