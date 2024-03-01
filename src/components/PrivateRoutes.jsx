import React from 'react'
import { Navigate } from "react-router-dom"
import { useProfileContext } from '../context/profile.context';
import SpinnerLoader from '../utlis/SpinnerLoader';

const PrivateRoutes = ({ children }) => {
  let { profile, isLoading } = useProfileContext();

  if (isLoading) {
    return <SpinnerLoader />
  }
  if (!profile && !isLoading) {
    return <Navigate to={"/signIn"} />
  }
  return (
    <>
      {children}
    </>
  )
}

export default PrivateRoutes