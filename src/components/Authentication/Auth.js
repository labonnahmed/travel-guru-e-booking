import React from 'react';
import Login from './Login';
import './Auth.css'
import OptionalAuth from './OptionalAuth';

const Auth = () => {
    return (
        <>
            <div className='auth-container d-flex mx-auto'>
                <Login />
            </div>
            <div className='d-flex text-center align-items-center justify-content-center py-3'>
                <hr className='mx-3'/>
                <div>or</div>
                <hr className='mx-3'/>
            </div>
            <OptionalAuth />
        </>
    );
};

export default Auth;