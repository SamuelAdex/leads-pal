"use client";

import { useAuthContext } from '@/context/AuthContext.context';
import React, {useEffect} from 'react'
import UpgradeNotice from './UpgradeNotice';

const RootComponent = ({children}) => {
  const {fetchUserDetails, isLoading, userInfo} = useAuthContext()

  useEffect(()=>{
    fetchUserDetails();
  },[isLoading])

  return (
    <div>
      {userInfo.isKyc !== true && <UpgradeNotice />}
      {children}
    </div>
  )
}

export default RootComponent