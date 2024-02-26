import React from 'react'
import {Navigate} from "react-router-dom";
const PublicRoutes = ({children}) => {
  let profile = false;
  if(profile)
  {
    return <Navigate to={"/"}/>;
  }  
  return (
    <>
        {children}
    </>
  )
}

export default PublicRoutes