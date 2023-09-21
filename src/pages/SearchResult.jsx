import React from 'react';
import NovoAir from '../assets/images/novo-air.png';
import { TbArrowsExchange } from 'react-icons/tb';

const SearchResult = () => {
    return (
        <div className="container max-w-[1280px] mx-auto px-5">
            <div className="rounded-3xl p-8 bg-white" style={{ boxShadow: "0 0 35px #ddd" }}>
                <h2 className='text-lg mb-5 border-b pb-2 font-semibold'>Search Result</h2>
                <div className="flights-container">
                    <div className="flight flex justify-between items-center">
                        <div className="left flex items-center gap-x-3">
                            <img className='w-[64px]' src={NovoAir} alt="airline logo" />
                            <div className="txt">
                                <h3 className='text-lg font-semibold'>NovoAir</h3>
                                <p className='text-sm'>Flight: BG0733</p>
                            </div>
                        </div>
                        <div className="center">
                            <h3 className='route flex items-center gap-x-2'>BZL <TbArrowsExchange className='text-blue-500' /> Cox's Bajar</h3>
                        </div>
                        <div className="center flex gap-x-[50px] items-center">
                            <h3 className="font-bold text-lg text-green-600">BDT 2,750.00</h3>
                        </div>
                        <div className="right">
                            <a
                                className='px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full'
                                href="passenger-info"
                            >
                                Select Flight
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;