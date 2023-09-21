import React from 'react';

const AboutPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="container max-w-[1200px] border mx-auto px-8 py-12 rounded-lg bg-white text-center">
                <h1 className='text-5xl text-rose-600 mb-10 font-bold underline'>About Us</h1>
                <p className='text-xl'>
                    Online Flight Ticket Booking System is a website that allows travellers to book flights using the internet. It simplifies the process of buying tickets by providing an easy-to-use platform where travellers can search for flights, compare prices, choose preferred schedule, and make payments online.
                    <br /><br />
                    <b className='text-rose-600'>Purpose:</b> The main purpose of an Online Flight Ticket Booking System is to make the process of booking flights convenient and efficient for travellers. It eliminates the need to visit a physical travel agency or airline office, saving time and effort.
                    <br /><br />
                    <b className='text-rose-600'>Benefits:</b> Convenient, Time-Saving, Secure Payments, E-Tickets (Instead of physical tickets)
                </p>
            </div>
        </div>
    );
};

export default AboutPage;