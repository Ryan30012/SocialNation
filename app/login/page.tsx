'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const router = useRouter();
    
    const login = {
        email: "Staffy@gmail.com",
        password: "Test123@"
    }

    function onHandleClick(e: { preventDefault: () => void; }) {
        e.preventDefault(); // Prevent default form submission behavior
    
        if (email === login.email && pw === login.password) {
          router.push('/profile');
        } else {
          setEmail('');
          setPw('');
        }
      }

  return (
    <div className="h-screen bg-[#ffffff] overflow-hidden">
        <div className="navbar-container sticky top-0 z-50">
            <div className="navbar bg-[#5a63e0] text-white p-4 shadow-md flex justify-between items-center">
                <div className="logo text-3xl font-extrabold tracking-wider">
                    SocialNation
                </div>
                <div className="pages flex gap-6">
                    <Link href="/ContactUs">
                        <div className="hover:text-[#5a63e0] hover:bg-white hover:cursor-pointer transition duration-200 font-semibold border border-white rounded-full px-4 py-2">Contact Us</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="h-full w-full text-[#023047] bg-[#fff6f6] flex justify-center items-center px-[10%]">
            <div className="signin h-[50%] bg-white flex flex-col justify-center items-center shadow-lg rounded-l-lg md:w-1/2">
                <div className="title text-2xl font-bold mb-4">
                    Sign In
                </div>
                <div className="logos flex space-x-4 mb-4">
                    <div className="facebook bg-yellow-400 p-2 rounded-full">
                        <AiFillFacebook className='text-black'/>
                    </div>
                    <div className="google bg-orange-400 p-2 rounded-full">
                        <AiFillGoogleCircle className='text-black'/>
                    </div>
                </div>
                <div className="subtext mb-2 text-center">
                    or use your account
                </div>
                <div className="input place-content-center flex flex-col space-y-2">
                    <input type="text" name='email' placeholder='Email' className="border rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name='pw' placeholder='Password' className="border rounded-md p-2" value={pw} onChange={(e) => setPw(e.target.value)}/>
                </div>
                <form onSubmit={onHandleClick}>
                    <button className="bg-[#fb8500] text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-700 transition duration-300" onClick={onHandleClick}>Sign In</button>
                </form>
            </div>
            <div className="message pl-[7.5%] h-[50%] flex flex-col justify-center items-center md:w-1/2 bg-indigo-600 text-white p-8 rounded-r-lg">
                <div className="title text-2xl font-bold text-center mb-4">
                    Hello, Friend
                </div>
                <div className="text text-center mb-4">
                    Enter your personal details and start this journey to discover your next best friends with SocialNation
                </div>
                <button className="bg-yellow-400 text-black rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
                    SIGN UP
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login