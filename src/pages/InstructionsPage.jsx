import React from 'react';
import Instructions from '../assets/images/instructions.png';

const InstructionsPage = () => {
    return (
        <div className='flex justify-center items-center my-[50px]'>
            <div className="container max-w-[1000px] border mx-auto px-8 py-12 rounded-lg bg-white">
                <h1 className='text-5xl text-rose-600 mb-10 font-bold underline text-center'>Instructions</h1>
                <img className='w-full' src={Instructions} alt="instructions" />
            </div>
        </div>
    );
};

export default InstructionsPage;