"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@/app/sessionContext";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface SignInResponse {
  error?: string;
  status?: number;
  ok?: boolean;
  url?: string;
}

function Auth({ session }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();
  const { setSession } = useSessionContext();
  setSession(session);
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const Login = async (e: React.FormEvent) => {
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
      const res = (await signIn("credentials", {
        email,
        password,
        redirect: false,
      })) as SignInResponse;
      if (res.error) {
        setError("Invalid email or password");
      } else {
        setError("");
        setMessage("Login successful");
        clearForm();
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while logging in. Please try again.");
    }
  };
  const logout = async () => {
    await signOut();
  };
  if (!session)
    return (
      <div className="flex h-screen flex-col  gap-2 w-screen justify-center items-center">
        <form
          onSubmit={Login}
          className="flex flex-col backdrop-blur-sm box-border p-5 bg-slate-800/70 border border-slate-700 border-solid gap-12 items-center shadow-sm rounded-lg"
        >
          {error && <p className="text-red-600">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-slate-200 flex h-10 mx-1 pl-3 bg-slate-700 border border-solid border-slate-600 rounded-lg shadow-md items-center outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-slate-200 h-10 bg-slate-700 pl-3 rounded-lg shadow-md border-slate-600 border border-solid items-center mx-1 outline-none"
          />
          <button
            type="submit"
            className="bg-slate-700 border border-solid border-slate-600 h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-200"
          >
            Login
          </button>
          <Link href="/register"
            className="bg-slate-700 flex items-center justify-center h-10 w-24 border-slate-600 border border-solid rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-200"
          >
            Register
          </Link>
          {message && <p className="text-green-600">{message}</p>}
        </form>
      </div>
    );
  else
    return (
      <div className="flex flex-col items-center gap-5 pt-5 mx-auto max-w-lg">
        <div className="flex items-center justify-center rounded-full bg-sky-600 text-white h-16 w-16">
          <BsFillCheckCircleFill className="text-4xl" />
        </div>
        <p className="text-lg text-center text-gray-300 font-bold">
          Thank you for logging in! We appreciate your interest in our chairs.
          Your request will be processed promptly to ensure you have a seamless
          shopping experience. If you have any questions or need assistance,
          feel free to reach out to our support team. Happy shopping!
        </p>
        <button onClick={logout} className="bg-slate-700 h-10 w-24 border border-solid border-slate-600 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-200">
          Sign Out
        </button>
        <Link
          href="/"
          className="bg-slate-700 flex items-center justify-center h-10 w-24 border border-solid border-slate-600 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-200 mt-4"
        >
          HomePage
        </Link>
      </div>
    );
}

export default Auth;
