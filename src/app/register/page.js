"use client";

import Image from 'next/image';
import React, { useContext, useState } from 'react'
import bgImg from '../../../public/images/maxim.jpg'
import Link from 'next/link';
import Button from '@/components/Button';
import {useAuthContext} from '@/context/AuthContext.context';

const Page = () => {
    const {register, isLoading} = useAuthContext()
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    });

  return (
    <div className='h-[100dvh] flex items-center'>
        <div className='flex-[3] h-[100vh] bg-bgSecondary'>
            <Image
                src={bgImg}
                alt=''
                className='w-full h-full object-cover'
            />
        </div>
        <div className='flex-[2.3] max-w-[600px] py-8 px-[4rem] bg-bgSecondary text-white'>
            <div className=''>
                <h1 className='md:text-[30px] text-[20px] font-bold'>Sign Up</h1>
            </div>
            <div className='mt-[2rem] flex flex-col gap-5'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label>FirstName</label>
                        <input value={data.firstName} onChange={(e)=> setData({...data, firstName: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='text' placeholder='Enter username' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>LastName</label>
                        <input value={data.lastName} onChange={(e)=> setData({...data, lastName: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='text' placeholder='Enter username' />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Username</label>
                    <input value={data.username} onChange={(e)=> setData({...data, username: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='text' placeholder='Enter username' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <input value={data.email} onChange={(e)=> setData({...data, email: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='email' placeholder='Enter email' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Password</label>
                    <input value={data.password} onChange={(e)=> setData({...data, password: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='password' placeholder='Enter password' />
                </div>
                <Button
                    text={"Sign up"}
                    btnStyle={"w-full bg-[#0169FD] p-3 rounded-[9px] text-white text-center"}
                    onBtnClick={()=> register(data.firstName, data.lastName, data.username, data.email, data.password)}
                    loading={isLoading}
                />
                <div className='text-[12px] flex justify-center'>
                    <p className=''>{"Already have an account?"} <Link className='text-[#0169fd]' href={'/login'}>Signin</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page