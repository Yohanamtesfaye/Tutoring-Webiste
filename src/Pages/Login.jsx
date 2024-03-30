import React from "react";


import { Link } from "react-router-dom";

import data from '../data'

const Login = () => {
  return (
    <>
      <div className="bg-[#F4EDE4] w-full flex justify-center h-screen items-center">
        <div className="container flex flex-wrap justify-around w-10/12 ">

          {data.map((person, id) => (
            <Card
              key={id}
              id = {id}
              img={person.img}
              role={person.role}
              desc={person.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = ({ role, img, desc,id }) => {
  const UserUrl = `/UserLogin?id=${id}`;
  
  return (
    <section className="bg-white w-80 flex flex-col items-center px-6 py-6 shadow-lg">
        <img src={img} alt="cartoonimg" className="w-40 py-2" />
        <h2 className="text-2xl text-black font-bold my-2">I am {role}</h2>
        <p className="my-2 font-light text-black text-center text-sm">{desc}</p>

        <Link to={UserUrl}>


        <button   className="px-4 py-2 mt-5 ml-4 bg-[#4a154b] font-bold text-white rounded-lg ">
          {role} Login
        </button>

        </Link>
    </section>
  );
};

export default Login;
