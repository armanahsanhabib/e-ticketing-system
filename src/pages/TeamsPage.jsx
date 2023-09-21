import React from 'react';
import Girl from '../assets/images/girl.png';

const TeamsPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="container max-w-[1000px] border mx-auto px-8 py-12 rounded-lg bg-white">
                <h1 className='text-5xl text-rose-600 mb-10 font-bold underline text-center'>Teams</h1>
                <div className="teams-container grid grid-cols-4">
                    <div className="team-member flex flex-col items-center">
                        <img className='w-[100px] rounded-full bg-amber-300 mb-3' src={Girl} alt="img" />
                        <h3 className='text-xl font-bold'>Monolata Das</h3>
                        <p>12311007</p>
                    </div>
                    <div className="team-member flex flex-col items-center">
                        <img className='w-[100px] rounded-full bg-rose-300 mb-3' src={Girl} alt="img" />
                        <h3 className='text-xl font-bold'>Nusrat Jahan Mouli</h3>
                        <p>12311006</p>
                    </div>
                    <div className="team-member flex flex-col items-center">
                        <img className='w-[100px] rounded-full bg-green-300 mb-3' src={Girl} alt="img" />
                        <h3 className='text-xl font-bold'>Baby Akter</h3>
                        <p>12311028</p>
                    </div>
                    <div className="team-member flex flex-col items-center">
                        <img className='w-[100px] rounded-full bg-purple-300 mb-3' src={Girl} alt="img" />
                        <h3 className='text-xl font-bold'>Hajera Sultana</h3>
                        <p>12311032</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamsPage;