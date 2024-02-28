import React from 'react'
import { Navigate } from "react-router-dom"
import { useProfileContext } from '../context/profile.context';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({ children }) => {
  let { profile, isLoading } = useProfileContext();

  if (isLoading) {
    return <><Spinner animation="border" variant="success" /></>
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