import React from 'react';
import fbLogo from '../../images/icons/fb.png';
import googleLogo from '../../images/icons/google.png'

const OptionalAuth = () => {
    return (
        <div className=''>
           <div className='optional-Auth d-flex mx-auto align-items-center py-1'>
                <img src={fbLogo} alt="" />
                <small className='mx-auto' style={{color:'black', fontWeight:'500'}}>Continue with Facebook</small>
            </div> 
            <div className='optional-Auth d-flex mx-auto align-items-center py-1'>
                <img src={googleLogo} alt="" />
                <small className='mx-auto' style={{color:'black', fontWeight:'500'}}>Continue with Google</small>
            </div>
        </div>
    );
};

export default OptionalAuth;