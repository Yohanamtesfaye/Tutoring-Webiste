import '@mantine/core/styles.css';
//import { MantineProvider } from '@mantine/core';
import { useState } from 'react'
 
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'
import StudentRegistration from './Pages/StudentRegistration'
import TutorRegistration from './Pages/TutorRegistration'
import TutorDetails from './Pages/TutorDetails'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Navbar from './Comonents/Navbar'


function App() {

  return (
    <> 
    <MantineProvider defaultColorScheme="dark">
    <div>
    <Navbar/>
    <Routes>
      
            <Route path='/' element= {<Home/>}/>
            <Route path='/register' element= {<Register/>}/>
            <Route path='/studentRegistration' element= {<StudentRegistration/>}/>
            <Route path='/tutorregistration' element= {<TutorRegistration/>}/>
            <Route path='/tutordetail' element={<TutorDetails/>}/>
            <Route path='/login' element={<Login/>}/>

      </Routes>
     
    </div>
      </MantineProvider>   
    </>
  )
}

export default App
