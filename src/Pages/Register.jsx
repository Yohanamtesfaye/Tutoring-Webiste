import { Link } from "react-router-dom"
import studentImage from "../Assets/studentImage.jpg"

export const Register = () => {
  return (
     
     <div className="bg-darkbg max-w-6xl mt-10 mx-auto flex justify-center items-center flex-col">        

     <div className="max-w-6xl rounded-lg shadow dark:bg-gray-800 top-20 ">
        <img className="rounded-t-lg w-80 ml-28" src={studentImage} alt="" />

        <div className="p-5 bg-white/70 ">
       
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-  white ml-28">I am</h5>
       
        <p className="ml-28 mb-3 font-normal text-gray-700 dark:text-gray-400">A platform where you can teach and learn from other university students.</p>

        <p><button className="inline-flex items-center ml-32 w-80 h-12 mb-8 px-3 py-2 font-bold text-lg text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Link to='/'> <p className="px-28">parent</p>  </Link>       
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>          
            </button></p>

        <button className="font-bold text-lg ml-32 inline-flex items-center w-80 h-12 px-3 py-2 mb-8 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <Link to='/'> <p className="px-28">student</p> </Link>         
       
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>            
        </button>
        <p><button className="font-bold text-lg ml-32 inline-flex items-center w-80 h-12 px-3 py-2 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <Link to='/'> <p className="px-28">tutor</p> </Link>         
       
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>            
        </button></p>
    </div>
</div>


    </div>
   
     )
}
