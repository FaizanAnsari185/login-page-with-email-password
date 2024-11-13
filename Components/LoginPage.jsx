"use client";
import React, { useState } from "react";

const LoginPage = ({ handleLogin }) => {
  const [hint, setHint] = useState(false);
  const [isEmail, setIsEmail] = useState("");
  const [IsPassword, setIsPassword] = useState("");

  function handleHint() {
    setHint(!hint);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(isEmail, IsPassword);
    setIsEmail("");
    setIsPassword("");
  }

  function handleEmail(e) {
    setIsEmail(e.target.value);
  }

  function handlePassword(e) {
    setIsPassword(e.target.value);
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-black">
        <form
          onSubmit={handleSubmit}
          className="
        flex flex-col items-center gap-5 p-10 shadow-2xl rounded-2xl text-white bg-black border-2 border-red-500"
        >
          <h1 className="text-4xl font-bold text-red-500">Login</h1>
          <p className="text-sm">Enter Your Email or Password</p>
          <input
            onChange={handleEmail}
            value={isEmail}
            type="text"
            placeholder="Email"
            className="px-3 py-1 text-sm rounded-2xl bg-black focus:outline-none border-2 border-red-500"
          />
          <input
            onChange={handlePassword}
            value={IsPassword}
            type="password"
            placeholder="Password"
            className="px-3 py-1 text-sm rounded-2xl bg-black focus:outline-none border-2 border-red-500"
          />
          <div className="text-center">
            {!hint ? (
              <p
                onClick={handleHint}
                className="hover:text-red-500 underline cursor-pointer"
              >
                Hint?
              </p>
            ) : (
              <p className="text-xs underline">
                Email - admin@me.com <br /> Password - 123
              </p>
            )}
          </div>
          <button className="border-[#ff2323] text-white bg-[#ff2323] text-xs py-2 px-8 rounded-2xl">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
