import '@mantine/core/styles.css';
import './App.css'
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
import Client from './Pages/Client'
import UserLogin from './Pages/UserLogin';
import { Footer } from 'antd/es/layout/layout';
function App() {
  

  return (
    <>
    <div>
      <MantineProvider>
        <Navbar/>
      <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/register' element= {<Register/>}/>
              <Route path='/studentRegistration' element= {<StudentRegistration/>}/>
              <Route path='/tutorregistration' element= {<TutorRegistration/>}/>
              <Route path='/tutordetail/:id' element={<TutorDetails/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/client' element={<Client/>}/>
              <Route path='/userLogin' element={<UserLogin/>}/>
              <Route path='/userLogin፡id' element={<UserLogin/>}/>

        </Routes>
        <Footer/>
      </MantineProvider>
    
     
    </div>
    
    </>
  )
}

export default App
