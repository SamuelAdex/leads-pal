"use client";

import { useAuthContext } from '@/context/AuthContext.context';
import React, {useEffect} from 'react'

const RootComponent = ({children}) => {
  const {fetchUserDetails, isLoading} = useAuthContext()

  useEffect(()=>{
    fetchUserDetails();
  },[isLoading])

  return (
    <div>{children}</div>
  )
}

export default RootComponent