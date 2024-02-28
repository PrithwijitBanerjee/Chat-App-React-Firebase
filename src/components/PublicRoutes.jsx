import React from 'react'
import { Navigate } from "react-router-dom";
import { useProfileContext } from '../context/profile.context';
import Spinner from 'react-bootstrap/Spinner';

const PublicRoutes = ({ children }) => {
  let { profile, isLoading } = useProfileContext();

  if (isLoading && !profile) {
    return <><Spinner animation="border" variant="success" /></>
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