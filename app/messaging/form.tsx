'use client'
import { timeStamp } from 'console'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillMessage, AiOutlineUser, AiOutlineSend } from "react-icons/ai"
import { RiChatVoiceLine } from 'react-icons/ri'
import {getCurrUser} from "@/app/api/route"

type user = {
    id: number;
    username: String;
    bio: String;
    interests: String[];
    profilePic: String; 
}

const Messaging = () => {
   
    const [user,setUser] = useState("")
    const [isBlured, setIsBlured] = useState<boolean>(true)
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello, how are you?", sender: "You", timestamp: "10:30 am" },
        { id: 2, text: "Hi, I'm fine, thanks! And you?", sender: "Jane", timestamp: "10:30 pm" }
    ]);

    
    const handleSendMessage = () => {
        if (currentMessage.trim() !== "") {
            const newMessage = {
                id: messages.length + 1,
                text: currentMessage,
                sender: "You", 
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([newMessage, ...messages]);
            setCurrentMessage(''); 
        }
    };

    const messagesEndRef = useRef(null);
    useEffect(() => {
        // Define an async function inside the effect
        const fetchCurrUser = async () => {
            try {
                const newUser = await getCurrUser();
                setUser(newUser); // Assuming getCurrUser() returns user data you want to store in state
            } catch (error) {
                console.error('Failed to fetch current user:', error);
                // Handle errors as appropriate
            }
        };

        // Call the async function
        fetchCurrUser();
    }, []);


  return (
    <div className="h-screen bg-white place-content-center px-[10%]">
         <div className="flex flex-col h-[80%] bg-gray-100">
            
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

            <div className="flex flex-1 overflow-hidden shadow-lg">
                <div className="w-1/3 bg-white overflow-y-auto">
                    <div className="flex flex-col">
                        <div className="p-4">
                            <div className="flex items-center rounded-full bg-gray-200">
                                <input className="w-full text-black rounded-full bg-transparent p-2 pl-5 text-sm placeholder-gray-500 focus:outline-none" placeholder="Search Chats" />
                                <button className="p-2 mr-2">
                                </button>
                            </div>
                        </div>
                        <div className="px-4 py-2 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Recent Chats</h2>
                        </div>
                        <div className="flex flex-col">
                            {user!='staffy'? RecentChat(isBlured, messages, messages.length):''}
                        </div>
                    </div>
                </div>

                <div className="w-2/3 flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white">
                        {user!='staffy'? ConvoName(user, setIsBlured, isBlured, false): ConvoName(user, setIsBlured, isBlured, true)}
                    </div>
                    <div className={user=='staffy'? "text-xs invisible bg-blue-100 text-blue-800 py-1 px-2 rounded-t": "text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-t"}>Common interest: Reading, Anime</div>
                    
                    <div className="flex-1 px-4 py-2 overflow-y-auto flex flex-col-reverse" ref={messagesEndRef}>
                        {user!='staffy' && messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[75%] rounded-lg px-4 py-2 my-2 ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}>
                                    <p className="text-sm">{message.text}</p>
                                    <span className={`text-xs ${message.sender === "You" ? "text-white" : "text-gray-500"}`}>{message.timestamp}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between px-4 py-2 border-t border-gray-300 bg-white">
                        <input onChange={(e) => setCurrentMessage(e.target.value)} className="flex-1 text-sm px-3 py-1 border-2 border-gray-300 rounded-full text-black focus:outline-none focus:border-blue-500" placeholder="Type your message here..." />
                        <button className="ml-2 text-lg text-gray-600 cursor-pointer">
                            <RiChatVoiceLine />
                        </button>
                        <button className="ml-2 text-lg text-gray-600 cursor-pointer" onClick={handleSendMessage}>
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Messaging

const RecentChat = (isBlured:boolean, msgs:any, length:any) => {
    return (
        <div className="flex items-center px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
            <div className="mr-4">
                <div className="">
                    <img className={`w-12 h-12 rounded-full object-cover ${isBlured? `blur-[5px]`: ``} `} src="/profilePics/1.jpg" alt="Profile" />
                </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-medium text-gray-800 truncate">John</span>
                <span className="text-xs text-gray-500 truncate">{charLimit(msgs[0].text)}</span>
            </div>
            <div className="ml-4">
                <span className="text-xs text-gray-500">11:30</span>
            </div>
        </div>
    )
}

function charLimit (str:string) {
    return str.slice(0, 15) + '...';
}

const ConvoName = (user:string, setIsBlured:any, isBlured:boolean, a:boolean) => {
    if(!a){
        return (
        <>
            <div className="flex items-center space-x-2">
                <div className="">
                    <img className={`w-12 h-12 rounded-full object-cover ${isBlured? `blur-[5px]`: ``} `} src="/profilePics/1.jpg" alt="Profile" />
                </div>
                <div>
                    <span className="text-sm font-medium text-gray-800">John</span>
                </div>
            </div>
            <button onClick={() => setIsBlured(false)} className={`text-xs ${!isBlured? 'invisible':''} bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded`}>{user=='staffy'?'Reveal':'Accept To Reveal'}</button>
        </>
        )
    } else {
        return (
            <div className="flex h-12 items-center space-x-2">
                
            </div>
        )
    }
}