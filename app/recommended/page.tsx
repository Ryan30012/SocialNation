'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillMessage, AiOutlineUser, AiOutlineSend, AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai"

type user = {
    id: number;
    username: String;
    bio: String;
    interests: String[];
}

const profile = () => {
    const [req , setReq] = useState<Boolean>(false)
    const [selectedUser, setSelectedUser] = useState<user | undefined>();

  // Example users' data
  const users = [
    {
      id: 1,
      username: '_JohnDoe',
      bio: 'Lorem ipsum dolor sit amet...',
      interests: ['Football', 'Attack on Titan', 'Game of Thrones', 'Tech'],
    },
    {
      id: 2,
      username: '_JaneDoe',
      bio: 'Consectetur adipiscing elit...',
      interests: ['Painting', 'Sculpture', 'Classical Music'],
    }
    // ... more users
  ];

  // Function to select user
  const handleUserClick = (user: user) => {
    setSelectedUser(user);
  };

  // Function to close the profile card
  const handleCloseClick = () => {
    setSelectedUser(undefined);
  };

  return (
    <div className="h-screen bg-white place-content-center px-[10%]">
         <div className="flex flex-col h-[80%] bg-gray-100">
            {/* Navbar */}
            <div className="flex items-center justify-center gap-[15%] px-4 py-2 shadow">
                <div className="flex items-center text-xl text-black space-x-4">
                    <Link href="/">
                        <AiFillMessage />
                    </Link>
                </div>
                <div className="flex text-5xl items-center text-[#8ecae6] space-x-4 cursor-pointer">
                    <Link href="/">
                        <img src="/logo.png" alt="Logo" className='w-[80px] relative cursor-pointer' />
                    </Link>
                </div>
                <div className="flex items-center text-xl text-black space-x-4">
                    <Link href="/profile">
                        <AiOutlineUser />
                    </Link>
                </div>
            </div>

            <div className="mini-nav-bar flex justify-center items-center space-x-4 py-2 bg-gray-100 text-black shadow">
                <div className="requests hover:bg-gray-200 bg-[#ffffff] rounded-lg cursor-pointer px-4 py-1 transition duration-300 ease-in-out" onClick={() => setReq(true)}>
                    Your Requests
                </div>
                <div className="find hover:bg-gray-200 bg-[#ffffff] rounded-lg cursor-pointer px-4 py-1 transition duration-300 ease-in-out" onClick={() => setReq(false)}>
                    Find New Friends
                </div>
            </div>
            {req && users.map((user) => (
                <div key={user.id} className="flex justify-between items-center p-4 shadow-md mb-2">
                <span className="cursor-pointer text-black" onClick={() => handleUserClick(user)}>
                    {user.username}
                </span>
                <div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Accept</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
                </div>
                </div>
            ))}

            {/* Profile card */}
            {req && selectedUser && (
                <div className="fixed inset-0 bg-black text-black w-screen bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-[60%] p-6 rounded-lg shadow-lg relative">
                        <button className="absolute top-4 text-2xl right-4" onClick={handleCloseClick}>
                        &times;
                        </button>
                        <h3 className="text-xl font-bold mb-2">{selectedUser.username}</h3>
                        <p className="text-gray-600 mb-4">{selectedUser.bio}</p>
                        <div className="flex">
                            <div className="mr-4">
                                <h4 className="font-semibold">Interests</h4>
                                <ul className="list-disc list-inside">
                                {selectedUser.interests.map((interest, index) => (
                                    <li key={index}>{interest}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!req && (
                <div className="flex overflow-hidden shadow-lg bg-white w-[90%] mx-[5%] mt-[3%] rounded-lg flex-col">
                    <div className="flex flex-col p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Calvin</h2>
                    </div>
                    
                    <div className="mb-6">
                        <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="interests flex justify-center items-start bg-white p-6 border border-gray-200 rounded-lg shadow">
                        <div className="w-[50%]">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Interests</h3>
                        <ul className="list-inside list-disc text-sm text-gray-600 space-y-1">
                            <li>Football</li>
                            <li>Attack on Titan</li>
                            <li>Game of Thrones</li>
                            <li>Tech</li>
                        </ul>
                        </div>
                        <div className=" w-[50%]">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Common Interests</h3>
                        <ul className="list-inside list-disc text-sm text-gray-600 space-y-1">
                            <li>Reading</li>
                            <li>Anime</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center justify-center bg-white p-4 gap-[50%] shadow rounded-b-lg">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-3 transition duration-300 ease-in-out focus:outline-none">
                        <AiOutlineUserAdd className="text-2xl" />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-3 transition duration-300 ease-in-out focus:outline-none">
                        <AiOutlineClose className="text-2xl" />
                    </button>
                    </div>
                </div>
            )}
        </div>
    </div>
)};
export default profile;