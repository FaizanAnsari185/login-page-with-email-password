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
      <div className="h-screen flex justify-center items-center bg-sky-950">
        <form
          onSubmit={handleSubmit}
          className="
        flex flex-col items-center gap-5 p-10 shadow-2xl rounded-2xl bg-slate-200"
        >
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-gray-700 text-sm">Enter Your Email / Password</p>
          <input
            onChange={handleEmail}
            value={email}
            type="text"
            placeholder="Email"
            className="px-3 py-1 text-sm rounded-lg focus:outline-none border border-sky-950"
          />
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            placeholder="Password"
            className="px-3 py-1 text-sm rounded-lg focus:outline-none border border-sky-950"
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
      </div>
    </>
  );
};

export default LoginPage;
