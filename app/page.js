"use client";
import Admin from "@/Components/Admin";
import LoginPage from "@/Components/LoginPage";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(false);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else {
      alert("invalid email or password");
    }
  };

  return (
    <>
      {!user ? <LoginPage handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <Admin /> : ""}
    </>
  );
}
