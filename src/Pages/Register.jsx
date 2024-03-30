import { Link } from "react-router-dom"
import studentImage from "../assets/studentImage.jpg"

const Register = () => {
  return (

     <div className="bg-[#F4EDE4] max-w-6xl mt-10 mx-auto flex justify-center items-center flex-col">        

     <div className="max-w-6xl rounded-lg shadow dark:bg-gray-800 top-20 ">
        <img className="rounded-t-lg w-80 ml-28" src={studentImage} alt="" />

        <div className="p-5 bg-white/70 ">
       
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-  white ml-28">Register As</h5>
       
        <p className="ml-28 mb-3 font-normal text-gray-700 dark:text-gray-400">A platform where you can teach and learn from other university students.</p>
        <div className="flex-row ml-28">
        <p><button className="px-4 py-2 mt-5 ml-4 bg-[#4a154b] font-bold text-white rounded-lg">
          <Link to='/studentRegistration'> <p className="px-[105px]">Parent</p> </Link>      
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>          
            </button></p>

        <button className="px-4 py-2 mt-5 ml-4 bg-[#4a154b] font-bold text-white rounded-lg">
             <Link to='/studentRegistration'> <p className="px-[100px]">student</p> </Link>         
       
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>            
        </button>
        <p><button className="px-4 py-2 mt-5 ml-4 bg-[#4a154b] font-bold text-white rounded-lg">
        <Link to='/tutorregistration'> <p className="px-[107px]">Tutor</p> </Link>          
       
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>            
        </button></p>
        </div>
       
    </div>
</div>


    </div>
   
     )
}
export default Register;