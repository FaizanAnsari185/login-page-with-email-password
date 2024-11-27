"use client";
import React, { useState } from "react";

const Admin = () => {
  const [navBar, setNavBar] = useState(true);

  const handleMenu = () => {
    setNavBar(!navBar);
  };
  return (
    <>
      <div className="relative h-screen w-screen bg-zinc-900 text-[#d9d9d9]">
        <nav className="backdrop-blur-sm fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-transparent px-10 py-4">
          <div className="cursor-pointer text-yellow-500 hover:translate-y-1 transition transform ease-in-out">
            Hello Faizan
          </div>
          <h1
            onClick={handleMenu}
            className="uppercase text-xs tracking-widest cursor-pointer text-yellow-500 hover:translate-y-1 transition transform ease-in-out"
          >
            menu
          </h1>
        </nav>
        <div
          className={`${
            navBar && `-translate-y-full`
          } leading-none transition transform ease-in-out duration-700 h-full w-full absolute z-20 bg-[#d9d9d9] flex flex-col justify-start`}
        >
          <div className="text-[#2c2c2c] flex justify-end bg-transparent px-10 py-4">
            <h1
              onClick={handleMenu}
              className="uppercase text-xs font-medium tracking-widest cursor-pointer hover:text-yellow-500 hover:translate-y-1 transition transform ease-in-out"
            >
              close
            </h1>
          </div>
          <h1 className="uppercase text-8xl text-[#2c2c2c] tracking-tighter ml-60 cursor-pointer hover:bg-yellow-500">
            home
          </h1>
          <h1 className="uppercase text-8xl text-[#2c2c2c] tracking-tighter ml-60 cursor-pointer hover:bg-yellow-500">
            work
          </h1>
          <h1 className="uppercase text-8xl text-[#2c2c2c] tracking-tighter ml-60 cursor-pointer hover:bg-yellow-500">
            about
          </h1>
          <h1 className="uppercase text-8xl text-[#2c2c2c] tracking-tighter ml-60 cursor-pointer hover:bg-yellow-500">
            contact
          </h1>
          <h1 className="uppercase text-8xl text-[#2c2c2c] tracking-tighter ml-60 cursor-pointer hover:bg-yellow-500">
            lab
          </h1>
        </div>
        <div className="h-full flex justify-between items-center px-10">
          <div className="flex flex-col gap-4 ml-52">
            <h1 className="uppercase text-7xl hover:translate-x-5 transition transform ease-in-out hover:text-yellow-500">
              lets go
            </h1>
            <h1 className="uppercase text-7xl hover:translate-x-5 transition transform ease-in-out hover:text-yellow-500">
              Welcome Back
            </h1>
            <h1 className="uppercase text-7xl hover:translate-x-5 transition transform ease-in-out hover:text-yellow-500">
              find happiness
            </h1>
            <h1 className="uppercase text-7xl hover:translate-x-5 transition transform ease-in-out hover:text-yellow-500">
              This Is Admin Page
            </h1>
          </div>
        </div>
        {/* <div className="flex justify-center items-center gap-20 bg-zinc-900">
          <div className="p-28 bg-[#d9d9d9] rounded-xl hover:scale-110 hover:-rotate-3 transition transform ease-in-out duration-500 hover:text-yellow-500">
            <h1 className="bg-zinc-900 text-3xl p-8 rounded-2xl hover:rotate-3 hover:scale-110 transition transform ease-in-out duration-500 ">
              Welcome Back
            </h1>
          </div>
          <div className="p-28 bg-[#d9d9d9] rounded-xl hover:scale-110 hover:rotate-3 transition transform ease-in-out duration-500 hover:text-yellow-500">
            <h1 className="bg-zinc-900 text-3xl p-8 rounded-2xl hover:-rotate-3 hover:scale-110 transition transform ease-in-out duration-500 ">
              This Is Admin Page
            </h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Admin;
