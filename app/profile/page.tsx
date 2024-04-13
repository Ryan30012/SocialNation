'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillMessage, AiOutlineUser, AiOutlineSend, AiOutlineUserAdd, AiOutlineClose, AiOutlineEdit } from "react-icons/ai"

const ProfilePage = () => {
  return (
    <div className="h-screen bg-white place-content-center px-[5%]">
        <div className="flex flex-col h-[80%] bg-gray-100">
            <div className="flex items-center justify-center gap-[15%] px-4 py-2 shadow">
                <div className="flex items-center text-xl text-black space-x-4">
                    <Link href="/messaging">
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
            <div className="p-10">
                <div className="flex items-center">
                    <div className="border-4 border-orange-200 rounded-full p-1">
                        <img className="w-32 h-32 rounded-full object-cover" src="/path-to-profile.jpg" alt="Profile" />
                    </div>
                    <div className="flex flex-col justify-center mx-4 flex-grow">
                        <span className="text-3xl font-bold text-gray-800">yournamehere</span>
                        <span className="text-sm text-gray-500">Bio...</span>
                    </div>
                    <button className="ml-auto text-gray-500 hover:text-gray-700">
                        <AiOutlineEdit className="text-2xl" />
                    </button>
                </div>

                {/* Gallery of Images */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <img src="/path-to-image-1.jpg" alt="Image 1" className="w-full h-40 bg-gray-200 object-cover rounded-sm" />
                    <img src="/path-to-image-2.jpg" alt="Image 2" className="w-full h-40 bg-gray-200 object-cover rounded-sm" />
                    <img src="/path-to-image-3.jpg" alt="Image 3" className="w-full h-40 bg-gray-200 object-cover rounded-sm" />
                    {/* More images */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage