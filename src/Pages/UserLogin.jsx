import React from "react";
import image2 from "../assets/i2r.png";

import { Link, useSearchParams } from 'react-router-dom';
import data from "../data";

const UserLogin = () => {
    const params = new URLSearchParams(document.location.search);
    const currentUser = data[params.get("id")]
      
  return (
    <>
      <div className="bg-[#F4EDE4] h-screen font-family-karla flex flex-col justify-center items-center">
        <div className="bg-[#fff] w-3/5 flex flex-col h-11/12 p-5 ">
          <p className="text-center text-4xl">Welcome {currentUser.role}</p>
          <div className=" flex flex-row justify-around items-center">
            <div className="w-1/3 flex justify-center">
              <div>
                <img  src={currentUser.img} alt="people" />
                <p className="text-center text-3xl font-bold text-black p-3">I am a {currentUser.role}</p>
                <div className=" text-center text-base text-black p-1">{currentUser.desc}</div>
              </div>
            </div>

            <div className="w-1/3 flex flex-col">
              
              <form
                className="flex flex-col pt-3 md:pt-8"
              >
                <div className="flex flex-col pt-4">
                  <label  className="text-sm m-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="p-2 rounded bg-[#d5ded8] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col pt-4">
                  <label  className="text-sm m-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="rounded bg-[#d5ded8] focus:outline-none py-2 px-3 "
                  />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="bg-[#96daa8] text-white font-bold text-lg hover:bg-[#60cc7d] p-2 mt-8"
                />
              </form>
              <div className="flex justify-between  pt-6 pb-8">
                
                <Link to={{pathname: "/Register",}}>
                    <button className="text-black hover:underline hover:text-blue-500">
                        create account
                    </button>
                </Link>
                <Link className="text-center text-blue-500 underline">
                    forget pasword ?
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default UserLogin;
