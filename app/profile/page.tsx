'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillMessage, AiOutlineUser, AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import { getCurrUser } from '../api/route';

const ProfilePage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [user,setUser] = useState("")

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

    console.log(user);
    
    const handleImageClick = (imageSrc:any) => {
      setSelectedImage(imageSrc);
    };
  
    const handleCloseClick = () => {
      setSelectedImage(null);
    };
    
  return (
    <div className="h-screen bg-white overflow-hidden px-[10%] py-[50px]">
        <div className="flex flex-col h-full bg-gray-100 overflow-auto">
            <div className="flex items-center justify-center gap-[15%] px-4 py-2 shadow">
                <div className="flex items-center text-xl text-black space-x-4">
                    <Link href="/messaging">
                            <AiFillMessage />
                    </Link>
                </div>
                <div className="flex items-center text-xl text-black space-x-4">
                    <Link href="/recommended">
                            <img src="/logo.png" alt="Logo" className='w-12 relative cursor-pointer' />
                    </Link>
                </div>
                <div className="flex text-5xl items-center text-[#8ecae6] space-x-4 cursor-pointer">
                    <Link href="/profile">
                            <AiOutlineUser />
                    </Link>
                </div>
            </div>
            <div className="p-10">
                <div className="pl-5 flex items-center mb-4">
                    <div className="border-4 border-orange-200 rounded-full p-1">
                    <img className="w-20 h-20 rounded-full object-cover" src={user!='staffy'?'/profilePics/1.jpg':''} alt={user!='staffy'?'No pictures yet':''} />
                    </div>
                    <div className="flex flex-col justify-center mx-4 flex-grow">
                        <span className="text-xl font-bold text-gray-800">{user}</span>
                        <span className="text-md w-[90%] mt-2 text-gray-500">This is a test for the soen 357 project {`=\>`} SocialNation</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <button className="text-gray-500 hover:text-gray-700 mb-2">
                          <AiOutlineEdit className="text-2xl" />
                      </button>
                      <button className="bg-blue-100 text-sm hover:bg-blue-200 text-blue-600 rounded-full py-3 px-5">
                          Upload a pic
                      </button>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-4 pt-10">
                        {user!='staffy' && ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'].map((imageName, index) => (
                            <img
                            key={index}
                            src={`/profilePics/${imageName}`}
                            alt={`Image ${index}`}
                            className="w-full h-[200px] bg-gray-200 object-cover rounded-sm cursor-pointer"
                            onClick={() => handleImageClick(`/profilePics/${imageName}`)}
                            />
                        ))}
                        </div>

                        {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"  onClick={handleCloseClick}>
                            <div className="bg-white p-2 rounded-lg shadow-lg">
                                <img src={selectedImage} alt="Zoomed In" className="w-full h-auto max-h-[80vh] object-contain" />
                                <button onClick={handleCloseClick} className="absolute top-0 right-0 text-white text-2xl p-2">
                                    <AiOutlineClose />
                                </button>
                            </div>
                        </div>
                        )}
            </div>
        </div>
    </div>
  )
}

export default ProfilePage;
