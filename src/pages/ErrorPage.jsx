import React from 'react';
import PlaneCrash from '../assets/images/404error.png';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="container mx-auto p-5 text-center">
                <img className='h-[200px] mx-auto' src={PlaneCrash} alt="plane crash img" />
                <h1 className='text-3xl font-bold'>404 Error!</h1>
                <p className='text-xl'>Sorry, The requested page not found!</p>
            </div>
        </div>
    );
};

export default ErrorPage;