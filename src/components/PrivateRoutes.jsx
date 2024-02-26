import React from 'react'
import {Navigate} from "react-router-dom"
const PrivateRoutes = ({children}) => {
  let profile = false;
  if(!profile)
  {
    return <Navigate to={"/signIn"}/>;
  }  
  return (
        <>
            {children}
        </>
  )
}

export default PrivateRoutes