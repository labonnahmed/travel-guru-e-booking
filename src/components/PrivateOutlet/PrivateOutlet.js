import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { mainContext } from '../../App';

const PrivateOutlet = () => {
    const[authUser] = useContext(mainContext);
    return (
        <div>
            {
                authUser ? <Outlet /> : <Navigate to='/login' />
            }
        </div>
    );
};

export default PrivateOutlet;