import React from 'react';
import Logo from '../assets/images/uair.png';

const Header = () => {
    return (
        <div className='border-b sticky top-0 left-0 bg-[#bfdbfeee] z-50'>
            <div className="container max-w-[1280px] mx-auto px-5 py-5 flex items-center justify-between">
                <div className="logo flex items-center gap-2">
                    <img src={Logo} alt="logo" className='h-[45px] w-auto' />
                    {/* <h3 className='font-[800] text-blue-600 text-2xl'>UGV Airlines</h3> */}
                </div>
                <div className="nav">
                    <ul className='flex items-center gap-8 text-gray-800 font-semibold text-lg'>
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="teams">Teams</a></li>
                        <li><a href="instructions">Instructions</a></li>
                    </ul>
                </div>
                <div className="login flex items-center gap-2 text-gray-500">
                    <a href="login">Login</a>
                    <span>|</span>
                    <a href="signup">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;