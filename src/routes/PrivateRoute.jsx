import React from 'react';
import { Navigate } from 'react-router-dom';


function PrivateRoute({component: Component, ...rest}) {
  if(localStorage.getItem('idUser') === null) {
    return <Navigate to="/" />
    } else return <Component {...rest} />
}

export default PrivateRoute;