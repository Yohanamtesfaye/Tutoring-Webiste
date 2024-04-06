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
  const [students, setStudents] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    axios.get(`http://localhost:3031/tutors/1`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
      axios.get('http://localhost:3031/client')
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
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
        {activeTab === 3 && <div>Content of Completed
          <div className="flex justify-center items-center w-full h-screen bg-[#F4EDE4]">
      <div className="w-3/4 h-3/4 bg-white mt-10 text-center shadow-md">
        {data && students && (
          <div className="bg-white m-8 flex flex-col justify-center items-center h-5/6">
            <div className="flex items-center mb-4">
              <p className="font-bold text-2xl mr-4 text-gray-600">{data.name}</p>
              <Link to="/tutorprofile" className="text-blue-500 text-sm">View details {">"}</Link>
            </div>
            <div className="p-10 flex bg-white w-3/4 h-1/2">
              <div className="flex-1 mr-4 w-1/4 flex flex-col items-center">
                <div className="bg-green-300 h-full rounded-md p-6 mb-4 text-center">
                  <p className="text-gray-700">{data.unpaid} <br /> Unpaid</p>
                </div>
              </div>
              <div className="flex-1 mr-4 w-1/4 flex flex-col items-center">
                <div className="bg-blue-200 h-full rounded-md p-6 mb-4 text-center">
                  <p className="text-gray-700">{data.totalStudents} <br />Total Students</p>
                </div>
              </div>
              <div className="flex-1 mr-4 w-1/4 flex flex-col items-center">
                <div className="bg-red-400 h-full rounded-md p-6 mb-4 text-center">
                  <p className="text-gray-700">{data.nTotaldays} <br />Total Days</p>
                </div>
              </div>
              <div className="flex-1 w-1/4 flex flex-col items-center">
                <div className="bg-yellow-300 h-full rounded-md p-6 mb-4 text-center">
                  <p className="text-gray-700">{data.totalEarning} <br /> Total earning</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">Students ({data.totalStudents})</p>
              <br />
              {students.map(student => (
                <div key={student.id} className="text-gray-600 p-4 shadow-md mb-4">
                  <p>
                    <span role="img" aria-label="Female Student" className="text-3xl">👩‍🎓</span>
                    <span role="img" aria-label="Male Graduate" className="text-3xl">👨‍🎓</span>
                    <span className="inline-block mr-2 font-fantasy"><h1>{student.name},</h1></span>{student.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
          </div>}
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