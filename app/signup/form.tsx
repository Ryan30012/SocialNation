'use client'
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai"
import MultiSelectDropdown from "../../components/MultiSelectDropdown"
import { useRouter } from 'next/navigation'
import { writeCurrUser } from '@/app/api/route'


type Data = {
    key: string;
    value: any;
};

const SignupForm = () => {
    const [interests, setInterests] = useState<string[]>([]); // This will store the selected interests
    const [page2, setpage2] = useState<boolean>(false);

    const router = useRouter()

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        pw: '',
        cpw: '',
        bio: '',
        country: '',
        state: '',
        city: '',
        zipcode: '',
        interest: [],
      });

      
    
    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInterestsChange = (selected: string[]) => {       
        setInterests(selected);
        setFormData(prevState => ({
            ...prevState,
            interests: selected
        }));
    };

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


    const handleFirstCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        
        if(formData.cpw != formData.pw){
            alert('The confirmation of the password should be the same as the password')
            setpage2(false)
        }
        else{
            setpage2(true)
        }
        
    }

    const handleCancel = () => {
        setpage2(false)
        router.refresh()
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        writeCurrUser(formData.username)
        router.push("/profile")
        router.refresh()
    };

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
        <form onSubmit={handleSubmit} className="inputs">
            {!page2 && (
                <div className="h-screen flex justify-center items-center px-[10%]">
                    <div className="w-full h-[60%] text-[#ffffff] md:w-1/2 flex flex-col justify-center items-center bg-indigo-600 p-8 rounded-l-lg shadow-lg">
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
                    <div className="w-full h-[60%] text-black md:w-1/2 flex flex-col justify-center items-center bg-white p-8 rounded-r-lg shadow-lg">
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
                            <input type="text" name='username' placeholder='Username' className="border rounded-md p-2" onChange={handleInputChange}/>
                            <input type="text" name='email' placeholder='Email' className="border rounded-md p-2"  onChange={handleInputChange}/>
                            <input type="password" name='pw' placeholder='Password' className="border rounded-md p-2"  onChange={handleInputChange}/>
                            <input type="password" name='cpw' placeholder='Confirm Password' className="border rounded-md p-2"  onChange={handleInputChange}/>
                        </div>
                        <button type="submit" onClick={handleFirstCreate} className="bg-[#fb8500] text-white rounded-xl py-2 px-4 mt-4 hover:bg-blue-700 transition duration-300">Create Account</button>
                    </div>
                </div>
            )}
        {page2 && (
            <div className="h-screen w-screen flex justify-center items-center px-4">
                <div className="w-3/4 flex flex-col justify-center items-center bg-[#ececec] p-4 text-gray-800 rounded-xl shadow-lg">
                    <div className="grid gap-7 text-sm p-4">
                        <div>
                        <p className="font-medium text-xl text-indigo-700">Personal Details</p>
                        <p className="text-gray-600">Please fill out all the fields.</p>
                        </div>
                
                        <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-4">
                            <div className="md:col-span-4">
                                <label className="text-gray-800 font-semibold">Interest</label>
                                <div className='bg-gray-50 rounded-xl shadow-inner'>
                                <MultiSelectDropdown options={optionCheckList} onSelectionChange={handleInterestsChange}/>
                                </div>
                            </div>
                    
                            <div className="md:col-span-4">
                                <label className="text-gray-800 font-semibold">Bio / Description</label>
                                <textarea name="bio" id="bio" rows={8} className="border border-gray-300 rounded px-4 w-full bg-gray-50 focus:border-indigo-300 focus:ring focus:ring-indigo-200 resize-none"></textarea>
                            </div>
                    
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold">Country / region</label>
                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent " />
                                </div>
                            </div>
                    
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold">State / province</label>
                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent " />
                                </div>
                            </div>
                    
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold">City</label>
                                <input type="text" name="city" id="city" className="h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 " />
                            </div>
                    
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold">Zipcode</label>
                                <input type="text" name="zipcode" id="zipcode" className="h-10 border border-gray-300 rounded px-4 w-full bg-gray-50" />
                            </div>
                    
                            <div className='md:col-span-2 flex justify-end items-end pt-4'>
                                <button type="submit" className="bg-indigo-500 text-white rounded-lg py-2 px-4 hover:bg-indigo-600 transition duration-300">
                                Create
                                </button>
                            </div>
                            <div className='md:col-span-2 flex justify-start items-start pt-4'>
                                <button onClick={handleCancel} className="bg-gray-400 text-white rounded-lg py-2 px-4 hover:bg-gray-500 transition duration-300">
                                Cancel
                                </button>
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

export default SignupForm