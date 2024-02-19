"use client";

import React, { useEffect, useState } from 'react'
import { SiGoogleadsense } from "react-icons/si";
import { RiGift2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdAdd } from 'react-icons/md';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { useAuthContext } from '@/context/AuthContext.context';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {
    const [isNewLead, setIsNewLead] = useState(false);
    const {userInfo, leads, fetchAllLeads, users, fetchAllUsers} = useAuthContext()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        requirement: ""
    })
    const [userLeads, setUserLeads] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    function resetInput(){
        data.name = "";
        data.email = "";
        data.phone = "";
        data.requirement = "";
    }


    const newLeadHandler = async () => {
        const Data = {
            name: data.name, 
            email: data.email, 
            phone: data.phone, 
            requirement: data.requirement, 
            user: userInfo._id
        }
        setIsLoading(true)
        try {
            const {data} = await axios.post('/api/leads', Data, {ContentType: "application/json"});

            setIsLoading(false)
            if(data.msg == "success"){
                router.push("/dashboard/leads")
                toast("Lead Created Successfully")
            }
            resetInput()
        } catch (error) {
            const err = error.response?.data;
            setIsLoading(false)
            toast(err?.msg)
        }
    }

    useEffect(()=>{
        async function fetchLeads(){
            try {
                const {data} = await axios.get(`/api/leads/${userInfo?._id}`);
                setUserLeads(data.response)
            } catch (error) {
                const err = error.response?.data;
                setIsLoading(false)
                toast(err?.msg)
            }
        }

        fetchLeads()
    },[isLoading, userInfo?._id])

    useEffect(()=>{
        fetchAllLeads()
    },[isLoading])

    useEffect(()=>{
        fetchAllUsers()
    },[])
  return (
    <div className='mt-[2rem] flex md:flex-row flex-col gap-8 relative'>
        <div className='flex-[3]'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='flex items-center gap-4 bg-bgColor rounded-[20px] shadow-sm p-4'>
                    <div className='bg-[rgba(22,163,74,0.2)] rounded-[14px] p-3'>
                        <SiGoogleadsense className="rounded-[12px] text-green-200" fontSize={"3rem"} />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <span className='md:text-[10px] text-[8px] font-bold text-[#bdbdbd]'>Leads</span>
                        <span className='md:text-[20px] text-[16px] font-bold text-white'>{userLeads?.length}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-bgColor rounded-[20px] shadow-sm p-4'>
                    <div className='bg-[rgba(1,105,253,0.2)] rounded-[14px] p-3'>
                        <RiGift2Line className="rounded-[12px] text-[#0169FD]" fontSize={"3rem"} />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <span className='md:text-[10px] text-[8px] font-bold text-[#bdbdbd]'>Rewards</span>
                        <span className='md:text-[20px] text-[16px] font-bold text-white'>0</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-bgColor rounded-[20px] shadow-sm p-4'>
                    <div className='bg-[rgba(224,22,26,0.2)] rounded-[14px] p-3'>
                        <FiUsers className="rounded-[12px] text-[#E0161A]" fontSize={"3rem"} />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <span className='md:text-[10px] text-[8px] font-bold text-[#bdbdbd]'>Total Users</span>
                        <span className='md:text-[20px] text-[16px] font-bold text-white'>{users.length}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-bgColor rounded-[20px] shadow-sm p-4'>
                    <div className='bg-[rgba(22,163,74,0.2)] rounded-[14px] p-3'>
                        <PiHandCoinsFill className="rounded-[12px] text-green-200" fontSize={"3rem"} />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <span className='md:text-[10px] text-[8px] font-bold text-[#bdbdbd]'>Point</span>
                        <span className='md:text-[20px] text-[16px] font-bold text-white'>{userInfo.points}</span>
                    </div>
                </div>
            </div>
            <div className='rounded-[20px] bg-bgColor mt-5 text-white p-7 h-[50%]'>
                Charts
            </div>
        </div>
        <div className='flex-[3]'>
            <div className="bg-bgColor rounded-[20px] shadow-sm py-4 px-7">
                <div className="">
                    <span className="md:text-[20px] text-[16px] font-bold text-white">All Leads</span>
                </div>
                <div className="mt-3 divide-y-[0.7px] flex flex-col h-[20%] gap-3 overflow-auto">
                    {leads.map((_, i)=>(
                        <div key={i} className="flex justify-between items-center py-3 text-[#bdbdbd] md:text-[15px] text-[13px]">
                            <div className="flex items-center gap-2 text-[#bdbdbd]">
                                <div className='bg-[rgba(22,163,74,0.2)] rounded-full p-2'>
                                    <FiUsers className='text-green-200' fontSize={"1.2rem"} />
                                </div>
                                <span className="">{_.name}</span>
                            </div>
                            <div className="">
                                <span className="">{new Date(_.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1 text-yellow-600 font-semibold">
                                <span className=''>10</span>
                                <PiHandCoinsFill className="" fontSize={"1.3rem"} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {isNewLead == true && (
            <Modal
                isOpen={isNewLead}
                onCloseModal={()=> setIsNewLead(false)}
            >
                <div className='md:w-[450px] w-full p-8 rounded-[14px] bg-bgColor shadow-md'>
                    <div className=''>
                        <span className='text-white font-bold md:text-[20px] text-[16px]'>Add New Leads</span>
                    </div>
                    <div className='flex flex-col gap-8 mt-4'>
                        <input value={data.name} onChange={(e)=> setData({...data, name: e.target.value})} type='text' placeholder='Leads name' className='bg-transparent border-[1px] text-[#bdbdbd] border-[#bdbdbd] p-3 rounded-[9px]' />
                        <input value={data.email} onChange={(e)=> setData({...data, email: e.target.value})} type='text' placeholder='Leads email' className='bg-transparent border-[1px] text-[#bdbdbd] border-[#bdbdbd] p-3 rounded-[9px]' />
                        <input value={data.phone} onChange={(e)=> setData({...data, phone: e.target.value})} type='text' placeholder='Leads phone number' className='bg-transparent border-[1px] text-[#bdbdbd] border-[#bdbdbd] p-3 rounded-[9px]' />
                        <select onChange={(e)=> setData({...data, requirement: e.target.value})} className="bg-transparent border-[1px] text-[#bdbdbd] border-[#bdbdbd] p-3 rounded-[9px]">
                            <option>Select Requirement</option>
                            <option value={"web development"}>Web Development</option>
                            <option value={"app development"}>App Development</option>
                            <option value={"blockchain development"}>Blockchain Development</option>
                            <option value={"crypto coin development"}>Crypto coin Development</option>
                            <option value={"e-commerce"}>E-commerce</option>
                            <option value={"existing software management"}>Existing Software management</option>
                        </select>
                        <Button 
                            text={"Submit"}
                            btnStyle={`text-white font-bold p-3 rounded-[9px] bg-bgPrimary`}
                            onBtnClick={newLeadHandler}
                            loading={isLoading}
                        />
                    </div>
                </div>
            </Modal>
        )}
        <button onClick={()=> setIsNewLead(true)} className='text-white rounded-full p-6 animate-bounce bg-[#0169FD] fixed bottom-3 right-6 active:bg-opacity-80 hover:bg-opacity-80'>
            <MdAdd fontSize={"2rem"} />
        </button>
    </div>
  )
}

export default Page