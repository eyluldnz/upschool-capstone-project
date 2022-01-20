import React from 'react'
import { Route, Navigate, useLocation } from "react-router-dom";

const ProtectRoute=({ auth,component:Component,children, ...rest })=> {

    let location=useLocation();

    return auth ?(
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )
   
}
export default ProtectRoute;
