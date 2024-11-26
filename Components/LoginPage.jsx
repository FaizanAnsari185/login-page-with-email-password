"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LoginPage = ({ handleLogin }) => {
  const [hint, setHint] = useState(false);
  const [isEmail, setIsEmail] = useState("");
  const [IsPassword, setIsPassword] = useState("");
  const [eye, setEye] = useState(false);

  function handleHint() {
    setHint(!hint);
  }

  function handleEye() {
    setEye(!eye);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(isEmail, IsPassword);
    setIsEmail("");
    setIsPassword("");
    setEye(false)
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
        flex flex-col items-center gap-5 p-10 shadow-2xl rounded-2xl text-white bg-black border-2 border-blue-500"
        >
          <h1 className="text-4xl font-bold text-blue-500">Login</h1>
          <p className="text-sm">Enter Your Email or Password</p>
          <input
            onChange={handleEmail}
            value={isEmail}
            type="text"
            placeholder="Email"
            className="px-5 py-1 text-sm rounded-2xl bg-black focus:outline-none border-2 border-blue-500"
          />
          <div className="flex items-center px-3 py-1 text-sm rounded-2xl border-2 border-blue-500">
            <input
              onChange={handlePassword}
              value={IsPassword}
              type={eye ? "text" : "password"}
              placeholder="Password"
              className="bg-black focus:outline-none"
            />
            <div onClick={handleEye} className="cursor-pointer text-white">
              {eye ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </div>
          </div>
          <div className="text-center">
            {!hint ? (
              <p
                onClick={handleHint}
                className="hover:text-blue-500 underline cursor-pointer"
              >
                Hint?
              </p>
            ) : (
              <p className="text-xs underline">
                Email - admin@me.com <br /> Password - 123
              </p>
            )}
          </div>
          <button className="border-blue-500 text-white bg-blue-500 text-xs py-2 px-8 rounded-2xl">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
