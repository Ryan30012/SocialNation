'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai"
import MultiSelectDropdown from "../../components/MultiSelectDropdown"


const Signup = () => {

    const optionCheckList = [
        'Sports & Athletics',
        'Reading (Books & Literature)',
        'Travel & Adventure',
        'Cooking & Culinary Arts',
        'Music & Instruments',
        'Fitness & Wellness',
        'Movies & Entertainment',
        'Gardening & Plants',
        'Outdoor Activities',
        'Arts & Crafts'
      ];

    const [page2, setpage2] = useState<boolean>(true);

    const goPage2 = () => {
        setpage2(true)
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
        <form action="" className="inputs">
            {!page2 && (
                <div className="h-screen text-[#023047] flex justify-center items-center px-4">
                    <div className="w-full h-[60%] md:w-1/2 flex flex-col justify-center items-center bg-indigo-600 p-8 rounded-l-lg shadow-lg">
                        <div className="title text-2xl font-bold text-center mb-4">
                            Welcome Back!
                        </div>
                        <div className="text text-center mb-4">
                            To keep connected with us, please login with your personal info
                        </div>
                        <Link href="/login">        
                            <button className="bg-yellow-400 text-black rounded-md py-2 px-4 hover:bg-[#ffb703] transition duration-300">
                                LOG IN
                            </button>
                        </Link>
                    </div>
                    <div className="w-full h-[60%] md:w-1/2 flex flex-col justify-center items-center bg-white p-8 rounded-r-lg shadow-lg">
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
                            or use your email for registration
                        </div>
                        <div className="input flex flex-col space-y-2">
                            <input type="text" name='username' placeholder='Username' className="border rounded-md p-2"/>
                            <input type="text" name='email' placeholder='Email' className="border rounded-md p-2"/>
                            <input type="password" name='pw' placeholder='Password' className="border rounded-md p-2"/>
                            <input type="password" name='cpw' placeholder='Confirm Password' className="border rounded-md p-2"/>
                        </div>
                        <button type="submit" onClick={() => goPage2} className="bg-[#fb8500] text-white rounded-xl py-2 px-4 mt-4 hover:bg-blue-700 transition duration-300">Create Account</button>
                    </div>
                </div>
            )}
        {page2 && (
            <div className="h-screen w-screen mt-[-5%] text-[#023047] flex justify-center items-center px-4">
                <div className=" w-3/4 flex flex-col justify-center items-center bg-indigo-600 p-8 rounded-xl shadow-lg">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
                            <div className='text-white'>
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="col-span-2 ">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-4">

                                    <div className="col-span-4 ">
                                        <label className='text-white'>Interest</label>
                                        <div className='bg-white rounded-xl'>
                                            <MultiSelectDropdown options={optionCheckList} />
                                        </div>
                                    </div>

                                    <div className="col-span-5">
                                        <label>Bio / Description</label>
                                        <textarea style={{ resize: 'none' }} name="bio" id="bio" rows={8} className="border mt-1 rounded px-4 w-full bg-gray-50 focus:border-blue-300 focus:ring focus:ring-blue-200"></textarea>
                                    </div>

                                    <div className="col-span-2">
                                        <label>Country / region</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent focus:border-blue-300 focus:ring focus:ring-blue-200" value="" />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label>State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent focus:border-blue-300 focus:ring focus:ring-blue-200" value="" />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label>City</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:border-blue-300 focus:ring focus:ring-blue-200" value="" placeholder="" />
                                    </div>

                                    <div className="col-span-2">
                                        <label>Zipcode</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:border-blue-300 focus:ring focus:ring-blue-200" placeholder="" value="" />
                                    </div>

                                    <div className='col-span-2 flex justify-end items-end pt-[2%]'>
                                        <button className="bg-yellow-400 text-black place-content-center rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300">
                                            Create
                                        </button>
                                    </div>
                                    <div className='col-span-2 flex justify-left items-left pt-[2%]'>
                                        <button className="bg-yellow-400 text-black rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )}
        {/*page3 && !page2 && (
            
        )*/}
        
        </form>
    </div>
  )
}

export default Signup