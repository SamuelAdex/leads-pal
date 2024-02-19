"use client";

import { useAuthContext } from '@/context/AuthContext.context';
import { useRouter } from 'next/navigation';
import React from 'react'
import {MdSearch} from 'react-icons/md'
import { RiSearchLine } from "react-icons/ri";


const Header = () => {
    const {userInfo} = useAuthContext();
    const router = useRouter();

  return (
    <div className='flex items-center'>
        <div className='flex-[4]'>
            <span className='text-[25px] text-white font-bold'>Welcome, {userInfo?.username}</span>
        </div>
        <div className='flex items-center gap-3 flex-[3]'>
            <div className='w-full flex items-center gap-3'>
                <div className='flex items-center flex-[2] gap-1 w-full bg-bgColor rounded-[14px] p-2'>
                    <RiSearchLine className='text-[#bdbdbd]' fontSize={"1.5rem"} />
                    <input type="text" placeholder='Search' className='bg-transparent text-[#bdbdbd] text-[12px] focus:outline-none w-full' />
                </div>
                <div className='relative'>
                    <div onClick={()=> router.push("/dashboard/profile")} className='p-3 cursor-pointer grid place-items-center border-bgColor text-white font-bold text-[14px] rounded-full bg-bgPrimary border-[1px]'>
                        <span>{userInfo?.firstName?.slice(0,1)}{userInfo?.lastName?.slice(0,1)}</span>
                    </div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header