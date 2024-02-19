"use client";

import Button from '@/components/Button';
import { useAuthContext } from '@/context/AuthContext.context';
import React, { useState } from 'react'
import { PiHandCoinsFill } from 'react-icons/pi';
import { RiGift2Line } from 'react-icons/ri';


const Page = () => {
    const {userInfo, updateUserById, isLoading} = useAuthContext()

    const [data, setData] = useState({
        firstName: userInfo?.firstName || "",
        lastName: userInfo?.lastName || "",
        username: userInfo?.username || "",
        email: userInfo?.email || "",
    })

  return (
    <div className='mt-10'>
        <div className='border-[1px] relative border-[#bdbdbd] rounded-[12px] p-16 w-full h-full'>
            <div className='rounded-full absolute p-10 bg-bgPrimary border-[2px] left-[4rem] border-[#bdbdbd] grid place-items-center'>
                <div className='text-white font-bold text-[40px]'>{userInfo?.firstName?.slice(0,1)}{userInfo?.lastName?.slice(0,1)}</div>
            </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 mt-6 gap-6'>
            <div className='bg-bgColor rounded-[14px] p-8'>
                <div className="mt-14 grid md:grid-cols-2 grid-cols-1 items-center gap-4">
                    <div className='flex items-center gap-4 bg-bgPrimary bg-opacity-[0.5] rounded-[20px] shadow-sm p-4'>
                        <div className='bg-[rgba(22,163,74,0.2)] rounded-[14px] p-3'>
                            <PiHandCoinsFill className="rounded-[12px] text-green-200" fontSize={"3rem"} />
                        </div>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='md:text-[10px] text-[8px] font-bold text-[#bdbdbd]'>Point</span>
                            <span className='md:text-[20px] text-[16px] font-bold text-white'>2,000</span>
                        </div>
                    </div>
                    <div className='text-white md:text-[25px] text-[20px]'>{userInfo.firstName} {userInfo.lastName}</div>
                    <div className='text-white md:text-[18px] text-[16px]'>{userInfo.username}</div>
                    <div className='text-white md:text-[18px] text-[16px]'>{userInfo.email}</div>
                </div>
                <div className='bg-bgPrimary rounded-[12px] mt-6 bg-opacity-[0.5] md:h-[50%] h-full p-8'></div>
            </div>
            <div className='bg-bgColor rounded-[14px] p-8'>
                <div className="">
                    <span className='text-white md:text-[25px] text-[20px]'>Update Profile</span>
                </div>
                <div className='flex flex-col gap-4 mt-3'>
                    <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
                        <div className='flex flex-col gap-1 text-[#bdbdbd]'>
                            <label>FirstName</label>
                            <input onChange={(e)=> setData({...data, firstName: e.target.value})} type='text' className="p-3 border-[1px] bg-transparent border-[#bdbdbd]" placeholder='' value={data.firstName} />
                        </div>
                        <div className='flex flex-col gap-1 text-[#bdbdbd]'>
                            <label>LastName</label>
                            <input onChange={(e)=> setData({...data, lastName: e.target.value})} type='text' className="p-3 border-[1px] bg-transparent border-[#bdbdbd]" placeholder='' value={data.lastName} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 text-[#bdbdbd]'>
                        <label>Username</label>
                        <input onChange={(e)=> setData({...data, username: e.target.value})} type='text' className="p-3 border-[1px] bg-transparent border-[#bdbdbd]" placeholder='' value={data.username} />
                    </div>
                    <div className='flex flex-col gap-1 text-[#bdbdbd]'>
                        <label>Email</label>
                        <input onChange={(e)=> setData({...data, email: e.target.value})} type='email' className="p-3 border-[1px] bg-transparent border-[#bdbdbd]" placeholder='' value={data.email} />
                    </div>
                    <div className='flex flex-col gap-1 text-[#bdbdbd]'>
                        <label>New password</label>
                        <input onChange={(e)=> setData({...data, password: e.target.value})} type='password' className="p-3 border-[1px] bg-transparent border-[#bdbdbd]" placeholder='' value={data.password} />
                    </div>
                    <Button
                        text={"Update Profile"}
                        btnStyle={'text-white bg-bgPrimary p-3 rounded-none'}
                        onBtnClick={()=> updateUserById(data.firstName, data.lastName, data.username, data.email, data.password, userInfo._id)}
                        loading={isLoading}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page