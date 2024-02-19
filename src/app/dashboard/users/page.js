"use client";

import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useAuthContext } from '@/context/AuthContext.context';
import React, { useEffect } from 'react'
import { PiHandCoinsFill } from 'react-icons/pi';

const Page = () => {
    const {fetchAllUsers, isUserFetching, rewardUserByUserId, users, deleteUser, userInfo, isLoading} = useAuthContext()

    useEffect(()=>{
        fetchAllUsers();
    },[isLoading])

    function deleteUserHandler(userId){
        let isConfirmed = window.confirm("Are you sure to Delete this User")
        if(isConfirmed){
            deleteUser(userId);
        }
    }


    function rewardUserByUserIdHandler(userId){
        let isConfimred = window.confirm("Are you sure to reward this User")
        if(isConfimred){
            rewardUserByUserId(userId);
        }
    }
  return (
    <div className='flex-[4]'>
        <div className=''>
            <span className="text-white md:text-[30px] font-bold text-[20px]">Manage Users</span>
        </div>
        <div className='bg-bgColor rounded-[14px] p-8 mt-8'>
            <div className=''>
                <input type="text" placeholder='Search' className='p-3 border-[2px] bg-transparent border-[#bdbdbd] rounded-[9px] w-full' />
            </div>
            <div className='mt-3'>
                <table>
                    <thead className='font-bold text-white md:text-[16px] text-[14px]'>
                        <tr>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>CreatedAt</th>
                            <th>Reward User</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {isUserFetching == true ? (
                        <div className='grid place-items-center w-full'>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {users.length > 0 ? (
                                <tbody className='divide-y'>
                                    {users.map((_,i)=>(
                                        <tr key={i} className='text-[#bdbdbd] py-6 font-bold md:text-[14px] text-[12px]'>
                                            <td>{_.firstName} {_.lastName}</td>
                                            <td>{_.email}</td>
                                            <td>{new Date(_.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <div className='flex items-center gap-1'>
                                                    <span className='text-white font-bold'>{_?.points}</span>
                                                    <PiHandCoinsFill onClick={()=> rewardUserByUserIdHandler(_?._id)} className="bg-[rgba(22,163,74,0.2)] cursor-pointer rounded-[14px] p-2 text-green-200" fontSize={"2.5rem"} />
                                                </div>
                                            </td>
                                            <td>
                                                <Button
                                                    text={"Delete"}
                                                    btnStyle={'bg-red-500 text-white p-3 font-bold'}
                                                    onBtnClick={()=>deleteUserHandler(_?._id)}
                                                    loading={_?._id && isLoading}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ) : (
                                <div className=''>No data Available</div>
                            )}
                        </>
                    )}
                </table>
            </div>
        </div>
    </div>
  )
}

export default Page