"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useSession } from "next-auth/react";
interface User {
  email: string;
  password:string,
  id: string;
  createdAt: string;
}

function Page() {
   const {data:session}=useSession();
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/api/getAllUsers`);
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filterUsers = search
      ? users.filter((user) =>
          user.email.toLowerCase().includes(search.toLowerCase())
        )
      : users;

    setFilteredUsers(filterUsers);
  }, [search, users]);
  console.log(filteredUsers)

 if(session?.user?.email==="viralwave2003@gmail.com")
  return (
    <div className="flex flex-col gap-6   text-slate-300 p-6">
      <div className="flex flex-row justify-between items-center w-full mb-4">
        <div className="flex items-center bg-slate-800 rounded-lg">
          <input
            className="pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a user ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300 ml-2" />
        </div>
       
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-slate-800 border border-slate-700 rounded-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Password</th>
              <th className="px-4 py-2 text-left">Created At</th>
             
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-slate-600 transition duration-200"
              >
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.password}</td>
                 <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  else return(
    <div className="flex w-screen h-screen pt-7 px-4 justify-center">
      <h1 className="text-4xl text-red-600 font-bold "> 😅SORRY BUT YOU ARE NOT AN ADMIN</h1>
    </div>
  )
}

export default Page;