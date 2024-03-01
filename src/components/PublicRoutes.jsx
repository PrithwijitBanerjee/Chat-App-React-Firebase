import React from 'react'
import { Navigate } from "react-router-dom";
import { useProfileContext } from '../context/profile.context';
import SpinnerLoader from '../utlis/SpinnerLoader';

const PublicRoutes = ({ children }) => {
  let { profile, isLoading } = useProfileContext();

  if (isLoading && !profile) {
    return <SpinnerLoader />
  }

  if (profile && !isLoading) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      {children}
    </>
  )
}

export default PublicRoutes