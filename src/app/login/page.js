"use client";

import Image from 'next/image';
import React, { useContext, useState } from 'react'
import bgImg from '../../../public/images/maxim.jpg'
import Link from 'next/link';
import {useAuthContext} from '@/context/AuthContext.context';
import Button from '@/components/Button';
import axios from 'axios';

const Page = () => {
    const {login, isLoading, testing, testingFunction} = useAuthContext()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

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
                <h1 className='md:text-[30px] text-[20px] font-bold'>Sign In {testing}</h1>
            </div>
            <div className='mt-[2rem] flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <input value={data.email} onChange={(e)=> setData({...data, email: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='email' placeholder='Enter email' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Password</label>
                    <input value={data.password} onChange={(e)=> setData({...data, password: e.target.value})} className='p-3 rounded-[9px] bg-transparent border-[1px] border-[#fafafa]' type='password' placeholder='Enter password' />
                </div>
                <Button
                    text={"Sign in"}
                    btnStyle={"w-full bg-[#0169FD] p-3 rounded-[9px] text-white text-center"}
                    onBtnClick={()=> login(data.email, data.password)}
                    loading={isLoading}
                />                
                <div className='text-[12px] flex justify-center'>
                    <p className=''>{"Don't have an account?"} <Link className='text-[#0169fd]' href={'/register'}>Signup</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page