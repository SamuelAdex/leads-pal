"use client";

import Link from 'next/link';
import React from 'react'
import { LuLayoutDashboard, LuGift } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { useAuthContext } from '@/context/AuthContext.context';
import { FiUsers } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';

const Sidebar = () => {
    const {logout, userInfo} = useAuthContext()

  return (
    <div className='fixed w-[7%] h-[90%] lg:block hidden shadow-sm bg-bgColor rounded-[16px]'>
        <div className='text-center p-4 text-white font-extrabold'>
            <span>Leads</span>
        </div>
        <div className='flex flex-col justify-between h-[85%] relative'>
            <div className=''>
                <div className='flex justify-center w-full rounded-[5px] text-[#a8a7a7] hover:text-white p-4 hover:ease-linear hover:bg-[#0169FD]'>
                    <Link href={"/dashboard"}>
                        <LuLayoutDashboard fontSize={"2rem"} className='font-bold' />
                    </Link>
                </div>
                <div className='flex justify-center w-full rounded-[5px] text-[#a8a7a7] hover:text-white p-4 hover:ease-linear hover:bg-[#0169FD]'>
                    <Link href={"/dashboard/leads"}>
                        <IoCreateOutline fontSize={"2rem"} className='font-bold' />
                    </Link>
                </div>
                <div className='flex justify-center w-full rounded-[5px] text-[#a8a7a7] hover:text-white p-4 hover:ease-linear hover:bg-[#0169FD]'>
                    <Link href={"/dashboard/reward"}>
                        <LuGift fontSize={"2rem"} className='font-bold' />
                    </Link>
                </div>
                {userInfo.isAdmin == true && <div className='flex justify-center w-full rounded-[5px] text-[#a8a7a7] hover:text-white p-4 hover:ease-linear hover:bg-[#0169FD]'>
                    <Link href={"/dashboard/users"}>
                        <FiUsers className="font-bold" fontSize={"2rem"} />
                    </Link>
                </div>}
                {userInfo.isAdmin == true && <div className='flex justify-center w-full rounded-[5px] text-[#a8a7a7] hover:text-white p-4 hover:ease-linear hover:bg-[#0169FD]'>
                    <Link href={"/dashboard/contacts"}>
                        <RiContactsLine className="font-bold" fontSize={"2rem"} />
                    </Link>
                </div>}
            </div>
            <div className='flex justify-center'>
                <BiLogOutCircle fontSize={"1.8rem"} onClick={logout} className='text-[#a8a7a7] active:text-bgPrimary cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Sidebar