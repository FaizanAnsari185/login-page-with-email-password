"use client";
import React, { useState } from "react";

const LoginPage = ({ handleLogin }) => {
  const [move, setMove] = useState(false);
  const [hint, setHint] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onBtn() {
    setMove(!move);
  }

  function handleHint() {
    setHint(!hint);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="h-[60%] w-[70%] flex items-center bg-[#ffffff] rounded-2xl relative overflow-hidden shadow-[#5a5a5a] shadow-2xl">
          <div
            className={`${
              move ? "translate-x-full rounded-l-full" : "rounded-r-full"
            } transition-all duration-1000 z-30 p-10 bg-[#ff2323] h-full w-1/2 absolute rounded-2xl`}
          ></div>

          <div
            className={`${
              move ? "-translate-x-full opacity-0" : ""
            } z-30 flex flex-col gap-5 items-center absolute left-24 text-center text-white transition-all duration-1000`}
          >
            <h1 className="text-4xl font-bold ">Welcome!</h1>
            <button
              onClick={onBtn}
              className="border border-white font-bold text-base py-2 px-10 rounded-3xl"
            >
              Start
            </button>
          </div>

          <div
            className={`${
              move ? "-translate-x-full opacity-0" : ""
            } z-20 flex flex-col gap-5 items-center absolute right-24 transition-all duration-1000`}
          >
            <h1 className="text-4xl font-bold text-center">
              Please Click <br /> Start Button
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${
              move ? "" : "translate-x-full opacity-0"
            } z-20 flex flex-col gap-5 items-center absolute left-24 transition-all duration-1000`}
          >
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="text-gray-700">Enter Your Email / Password</p>
            <input
              onChange={handleEmail}
              value={email}
              type="text"
              placeholder="Email"
              className="px-3 py-1 bg-gray-200 text-sm rounded-sm focus:outline-none"
            />
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              placeholder="Password"
              className="px-3 py-1 bg-gray-200 text-sm rounded-sm focus:outline-none"
            />
            <div className="text-center">
              {!hint ? (
                <p
                  onClick={handleHint}
                  className="text-gray-500 hover:text-red-500 underline cursor-pointer"
                >
                  Hint!
                </p>
              ) : (
                <p className="text-gray-500 text-xs underline">
                  Email - admin@me.com <br /> Password - 123
                </p>
              )}
            </div>
            <button className="border-[#ff2323] text-white bg-[#ff2323] text-xs py-2 px-8 rounded-2xl">
              Login
            </button>
          </form>

          <div
            className={`${
              move ? "" : "translate-x-full opacity-0"
            } z-30 flex flex-col gap-5 items-center absolute right-24 text-white text-center transition-all duration-1000`}
          >
            <h1 className="text-4xl font-bold">Hello, Friend!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
