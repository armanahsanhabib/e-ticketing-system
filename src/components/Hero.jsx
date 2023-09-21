import React from 'react';
import HeroAirplane from '../assets/images/hero-aiplane.png';

const Hero = () => {
    return (
        <div className=''>
            <div className="container mx-auto px-5 xl:my-[100px] my-[80px] grid grid-cols-2 gap-[50px]">
                <div className="txt flex flex-col gap-5">
                    <h1 className='capitalize xl:text-6xl text-5xl font-[800] xl:leading-[5rem] leading-[4rem]'>Where would you like to go?</h1>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo laborum sapiente minima cumque dicta enim rerum ducimus ab quo?
                    </p>
                    <button className='w-max bg-blue-500 shadow-lg shadow-blue-500/25 text-gray-50 rounded-xl'>
                        <a href="#search_form" className='flex px-5 py-2'>Book Now</a>
                    </button>
                </div>
                <div className="img">
                    <img src={HeroAirplane} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Hero;