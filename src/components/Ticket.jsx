import React from 'react';
import { BsPlusCircle, BsPrinter } from 'react-icons/bs';
import { FaPlane } from 'react-icons/fa';
import { MdLuggage } from 'react-icons/md';
import WorldMap from '../assets/images/world-map.svg';

const Ticket = (props) => {
    const handlePrintTicketClick = () => {
        window.print();
    }

    return (
        <div id='search_form'>
            <div className="container max-w-[1280px] mx-auto px-5">
                <div className="rounded-3xl p-8" style={{ boxShadow: "0 0 35px #ddd" }}>
                    <h2 className='text-lg mb-5 border-b pb-2 font-semibold'>Your Ticket Generated Succesfully!</h2>
                    <div className="print-area flex border-s border-e rounded-xl overflow-hidden">
                        <div className="left w-[65%]">
                            <div className="top_header bg-rose-800 grid grid-cols-3 py-3 px-5 text-gray-50 text-xl font-bold">
                                <h2 className=''>UGV Airlines</h2>
                                <h2 className='flex items-center gap-x-2'><FaPlane /> Air Ticket</h2>
                            </div>
                            <div className="main_content relative grid grid-cols-4 gap-3 py-5 ps-8">
                                <div className="col-span-2">
                                    <h2 className='text-gray-500'>Passenger Name</h2>
                                    <h2 className='text-xl font-semibold'>{props.passengerFirstName + " " + props.passengerLastName}</h2>
                                </div>
                                <div className="col-span-2">
                                    <h2 className='text-gray-500'>Ticket No</h2>
                                    <h2 className='text-xl font-semibold'>{props.passportNo}</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>From</h2>
                                    <h2 className='text-xl font-semibold'>{props.departureAirport}</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>To</h2>
                                    <h2 className='text-xl font-semibold'>{props.destinationAirport}</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>Flight No</h2>
                                    <h2 className='text-xl font-semibold'>BG373</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>Seat No</h2>
                                    <h2 className='text-xl font-semibold'>{props.selectedSeat}</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>Departure Date</h2>
                                    <h2 className='text-xl font-semibold'>{props.journeyDate}</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>Time</h2>
                                    <h2 className='text-xl font-semibold'>10:45 AM</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>Return Date</h2>
                                    <h2 className='text-xl font-semibold'>{props.returnDate}</h2>
                                </div>
                                <div className="">
                                    <h2 className='text-gray-500'>Time</h2>
                                    <h2 className='text-xl font-semibold'>3:50 PM</h2>
                                </div>
                                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-gray-300 text-3xl font-bold z-[-10]">
                                    <img src={WorldMap} alt="World Map" className='w-full opacity-[15%]' />
                                    {/* <h3 className='text-gray-300 text-2xl text-center font-bold'>UGV Airlines</h3> */}
                                </div>
                            </div>
                            <div className="bottom_footer bg-rose-800 py-1 px-5 text-gray-50">
                                <h2>*Gates closes 30 minutes before departure!</h2>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-[20px] h-[20px] bg-gray-50 rounded-full -top-[10px] -left-[8px]"></div>
                            <div className="absolute w-[20px] h-[20px] bg-gray-50 rounded-full -bottom-[10px] -left-[8px]"></div>
                        </div>
                        <div className="right flex flex-col justify-between w-[35%] border-l-2 border-l-rose-800 border-dashed">
                            <div className="">
                                <div className="top_header bg-rose-800 py-3 px-5 text-gray-50 text-xl font-bold">
                                    <h2 className='flex items-center gap-x-2'><MdLuggage />Boarding Pass</h2>
                                </div>
                                <div className="relative main_content grid grid-cols-2 gap-3 py-5 ps-8">
                                    <div className="">
                                        <h2 className='text-gray-500'>Passenger Name</h2>
                                        <h2 className='text-xl font-semibold'>{props.passengerFirstName + " " + props.passengerLastName}</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-gray-500'>Ticket No</h2>
                                        <h2 className='text-xl font-semibold'>AD526641</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-gray-500'>Flight No</h2>
                                        <h2 className='text-xl font-semibold'>BG373</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-gray-500'>Seat No</h2>
                                        <h2 className='text-xl font-semibold'>{props.selectedSeat}</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-gray-500'>Departure Date</h2>
                                        <h2 className='text-xl font-semibold'>{props.journeyDate}</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-gray-500'>Time</h2>
                                        <h2 className='text-xl font-semibold'>10:45 AM</h2>
                                    </div>
                                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[-10]">
                                        <img src={WorldMap} alt="World Map" className='w-full opacity-[15%]' />
                                        {/* <h3 className='text-gray-300 text-xl text-center font-bold'>UGV Airlines</h3> */}
                                    </div>
                                </div>
                            </div>
                            <div className="bottom_footer bg-rose-800 py-1 px-5 text-gray-50 text-center">
                                <h2>Thanks for flying with us!</h2>
                            </div>
                        </div>
                    </div>
                    <div className='text-lg mt-5 border-t pt-5 font-semibold flex justify-center gap-5'>
                        <button
                            className='w-max bg-rose-500 hover:shadow-md hover:shadow-rose-500/25 text-gray-50 rounded-lg px-5 py-2 flex items-center gap-x-2'
                            onClick={() => handlePrintTicketClick()}
                        ><BsPrinter />Print Ticket</button>
                        <button
                            className='w-max bg-green-500 hover:shadow-md hover:shadow-green-500/25 text-gray-50 rounded-lg px-5 py-2 flex items-center gap-x-2'
                            onClick={() => props.handleNewTicketClick()}
                        ><BsPlusCircle />New Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;