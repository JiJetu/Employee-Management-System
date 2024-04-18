import React, { useContext } from 'react';
import { AuthContext } from '../provider-context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='text-center h-[80vh] flex justify-center items-center'><progress className="progress w-56"></progress></div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;