"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const clearForm=()=>{
    setEmail("");
    setPassword("");
  }
  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const response = await axios.post("/api/addUser", { email, password });
      const { status, message } = response.data;

      if (status === 200) {
        setMessage(message);
        setError(""); 
      } else {
        setError(message);
        setMessage(""); 
        
      }
      clearForm();
    } catch (error: any) {
      console.log(error);
      setError("An error occurred while registering. Please try again.");
    }
  };

  return (
    <div className=" flex  h-screen flex-row w-screen justify-center items-center">
      <form
        onSubmit={addUser}
        className="flex flex-col backdrop-blur-sm box-border p-5 bg-slate-800/70 border border-slate-700 border-solid gap-12 items-center shadow-sm rounded-lg"
      >
        {error && <p className="text-red-600">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="text-slate-200 flex h-10 mx-1 pl-3 bg-slate-700 border border-solid border-slate-600 rounded-lg shadow-md items-center outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="text-slate-200 h-10 bg-slate-700 pl-3 rounded-lg shadow-md border-slate-600 border border-solid items-center mx-1 outline-none"
        />
        <button
          type="submit"
          className="bg-slate-700 border border-solid border-slate-600 h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-200"
        >
          Register
        </button>
        <button className="bg-slate-700 h-10 w-24 border-slate-600 border border-solid rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-200">
          <Link href="/">Back</Link>
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </div>
  );
}

export default Page;
