import React from "react";

const Admin = () => {
  return (
    <>
      <div className="h-screen w-screen bg-zinc-900 text-white">
        <nav className="flex justify-between items-center bg-transparent px-20 py-4 border-b-[1px] border-[#4949499a]">
          <div className="text-2xl font-bold cursor-pointer">
            Hello Faizan🖐️
          </div>
          <div className="capitalize text-xs tracking-widest font-bold flex justify-between items-center gap-16">
            <h1 className="cursor-pointer">about</h1>
            <h1 className="cursor-pointer">contact</h1>
            <h1 className="cursor-pointer">service</h1>
          </div>
        </nav>
        <div className="flex justify-center items-center gap-20 mt-32">
          <div className="p-24 bg-indigo-950 rounded-xl hover:scale-110 hover:-rotate-3 transition transform ease-in-out duration-500">
            <h1 className="bg-zinc-900 text-3xl p-8 rounded-2xl hover:rotate-3 hover:scale-110 transition transform ease-in-out duration-500">
              Welcome Back👍
            </h1>
          </div>
          <div className="p-24 bg-red-950 rounded-xl hover:scale-110 hover:rotate-3 transition transform ease-in-out duration-500">
            <h1 className="bg-zinc-900 text-3xl p-8 rounded-2xl hover:-rotate-3 hover:scale-110 transition transform ease-in-out duration-500">
              This Is Admin Page📄
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
