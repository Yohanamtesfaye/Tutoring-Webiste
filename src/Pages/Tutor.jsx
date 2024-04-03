import React, { useEffect, useState } from 'react'
import { BiBell } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import tutorintro from '../assets/OIP.png'
import Navbar from '../Comonents/Navbar';
import Home from './Home';
const Tutor = () => {
 const id =  localStorage.getItem('id')
  const [data, setData] =useState([]);
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    axios.get(`http://localhost:3031/tutors/1`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (<>
      {/* navbar */}
      <div className='p-5'>
      
      {/* intro */}
      <div className='flex justify-between px-20'>
      <div>
          <h1 className='text-gray-600 font-mono text-2xl px-4 mt-10'>Wellcome</h1>
          <p className='px-4 mt-2 font-bold font-mono text-lg'>{data.name}</p>
          <h1 className='text-gray-600 font-mono text-2xl px-4 mt-8'>Total Earning</h1>
          <p className='px-4 mt-2 font-bold font-mono text-lg'>{data.totalEarning}</p>
        </div>
        <div>
          <img src={tutorintro} width={'500px'} />
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <div className='mr-48 bg-teal-500 p-10'>
          <p className='font-bold text-white font-serif'>Total Job</p>
          <p className='font-bold text-white font-serif'>{data.ntotalJob}</p>
        </div>
        <div className='mr-48 bg-teal-500 p-10'>
          <p  className='font-bold text-white font-serif'>Ongoing Job</p>
          <p className='font-bold text-white font-serif'>{data.nongoingJob}</p>
        </div>
        <div className='bg-teal-500 p-10'> 
          <p  className='font-bold text-white font-serif'>Total Days</p>
          <p className='font-bold text-white font-serif'>{data.nTotaldays}</p>
        </div>
      </div>

      
      <div className="flex justify-center mt-10">
      {/* Tab Headers */}
      <div className="flex">
        <button
          className={`px-20 py-2 mr-20 rounded-t-lg ${activeTab === 1 ? ' text-[#4a154b] text-3xl font-bold' : ' text-xl text-gray-600 '}`}
          onClick={() => setActiveTab(1)}
        >
         Available Jobs
        </button>
        <button
          className={`px-20 py-2 mr-20 rounded-t-lg ${activeTab === 2 ? ' text-[#4a154b] text-3xl font-bold' : ' text-xl text-gray-600 '}`}
          onClick={() => setActiveTab(2)}
        >
         Ongoing Jobs
        </button>
        <button
          className={`px-20 py-2 rounded-t-lg ${activeTab === 3 ? ' text-[#4a154b] text-3xl font-bold' : ' text-xl text-gray-600'}`}
          onClick={() => setActiveTab(3)}
        >
          Completed
        </button>
      </div>

      {/* Tab Content */}
     
    </div>
    <div className="bg-gray-100 p-4 mt-2 rounded-b-lg">
        {activeTab === 1 && <div>Content of Avalabe Jobs</div>}
        {activeTab === 2 && <div>Content of Ongoing Job</div>}
        {activeTab === 3 && <div>Content of Completed</div>}
      </div>
      <div>
        <div>

        </div>
      </div>
      </div>
  </>
    
  )
}

export default Tutor