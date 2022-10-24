import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <BeatLoader className='spinner' color="#2146C7" />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children


};

export default PrivateRoute;