import React from "react";


import { Link } from "react-router-dom";

import data from '../data'

const Login = () => {
  return (
    <>
      <div className="bg-[#98ABEE] w-full flex justify-center h-screen items-center">
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


        <button   className="my-3 bg-[#cfcfba] hover:bg-[#a5a595] text-white font-bold py-2 px-10 rounded">
          {role} Login
        </button>

        </Link>
    </section>
  );
};

export default Login;
