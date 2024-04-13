import Link from 'next/link'
import React from 'react'
import { AiFillMessage, AiOutlineUser, AiOutlineSend } from "react-icons/ai"

const messaging = () => {
  return (
    <div className="h-screen bg-white place-content-center px-[10%]">
         <div className="flex flex-col h-[80%] bg-gray-100">
            {/* Navbar */}
            <div className="flex items-center justify-center gap-[15%] px-4 py-2 shadow">
                <div className="flex text-5xl items-center text-[#8ecae6] space-x-4 cursor-pointer">
                    <AiFillMessage />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/recommended">
                        <img src="/logo.png" alt="Logo" className='w-10 relative cursor-pointer' />
                    </Link>
                </div>
                <div className="flex items-center text-xl text-black space-x-4">
                    <Link href="/profile">
                        <AiOutlineUser />
                    </Link>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex flex-1 overflow-hidden shadow-lg">
                <div className="w-1/3 bg-white overflow-y-auto">
                    <div className="flex flex-col">
                        <div className="p-4">
                            <div className="flex items-center rounded-full bg-gray-200">
                                <input className="w-full rounded-full bg-transparent p-2 text-sm placeholder-gray-500 focus:outline-none" placeholder="Search Chats" />
                                <button className="p-2 mr-2">
                                </button>
                            </div>
                        </div>
                        <div className="px-4 py-2 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Recent Chats</h2>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                                <div className="mr-4">
                                    <span className="block w-10 h-10 bg-gray-300 rounded-full"></span>
                                </div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className="text-sm font-medium text-gray-800 truncate">John</span>
                                    <span className="text-xs text-gray-500 truncate">It was nice talking...</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-xs text-gray-500">11:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/3 flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gray-300 rounded-full">
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-800">John</span>
                            </div>
                        </div>
                        <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded">Reveal</button>
                    </div>
                    <div className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-t">Common interest:</div>
                    
                    <div className="flex-1 px-4 py-2 overflow-y-auto">
                    </div>

                    <div className="flex items-center justify-between px-4 py-2 border-t border-gray-300 bg-white">
                        <input className="flex-1 text-sm px-3 py-1 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500" placeholder="Type your message here..." />
                        <button className="ml-2 text-lg text-gray-600">
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default messaging