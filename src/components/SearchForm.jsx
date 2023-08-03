import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaPassport, FaPlaneArrival, FaPlaneDeparture, FaUser } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { TbArrowRight, TbArrowsLeftRight } from 'react-icons/tb';
import SeatSelectionMap from '../assets/images/seat-selection-map.svg';

const SearchForm = (props) => {
    const [selectedWay, setSelectedWay] = useState("roundtrip");
    const [selectedClass, setSelectedClass] = useState("economy");
    const [isSeatSelectionOpen, setIsSeatSelectionOpen] = useState(false);

    const handleSeatSelect = (seat) => {
        props.setSelectedSeat(seat);
        setIsSeatSelectionOpen(!isSeatSelectionOpen);
    }

    const Seat = (props) => {
        return (
            <button
                className={`w-max mx-auto p-1 hover:bg-rose-600 font-bold hover:text-gray-50 transition-all border border-rose-300 rounded ${props.selectedSeat === props.seat ? 'bg-rose-600 text-gray-50' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => handleSeatSelect(props.seat)}
            >{props.seat}</button>
        );
    }

    const seatNo = [
        "A-1", "A-2",
        "B-1", "B-2",
        "C-1", "C-2",
        "D-1", "D-2",
        "E-1", "E-2",
        "F-1", "F-2",
        "G-1", "G-2",
        "H-1", "H-2",
    ];

    return (
        <div id='search_form'>
            <div className="container max-w-[1280px] mx-auto px-5">
                <div className="flex flex-col rounded-3xl p-8 gap-5" style={{ boxShadow: "0 0 35px #ddd" }}>
                    <div className="top_row flex items-center gap-8">
                        <ul className='flex border rounded-lg w-max overflow-hidden text-sm'>
                            <li
                                className={`px-5 py-3 cursor-pointer border-r ${selectedWay === 'oneway' ? 'bg-gray-100 text-blue-500 font-semibold' : "bg-transparent"}`}
                                onClick={() => setSelectedWay("oneway")}
                            >One Way</li>
                            <li
                                className={`px-5 py-3 cursor-pointer ${selectedWay === 'roundtrip' ? 'bg-gray-100 text-blue-500 font-semibold' : "bg-transparent"}`}
                                onClick={() => setSelectedWay("roundtrip")}
                            >Round Trip</li>
                        </ul>
                        <ul className='flex border rounded-lg w-max overflow-hidden text-sm'>
                            <li
                                className={`px-5 py-3 cursor-pointer border-r ${selectedClass === 'economy' ? 'bg-gray-100 text-blue-500 font-semibold' : "bg-transparent"}`}
                                onClick={() => setSelectedClass("economy")}
                            >Economy Class</li>
                            <li
                                className={`px-5 py-3 cursor-pointer border-r ${selectedClass === 'business' ? 'bg-gray-100 text-blue-500 font-semibold' : "bg-transparent"}`}
                                onClick={() => setSelectedClass("business")}
                            >Business Class</li>
                            <li
                                className={`px-5 py-3 cursor-pointer  ${selectedClass === 'first' ? 'bg-gray-100 text-blue-500 font-semibold' : "bg-transparent"}`}
                                onClick={() => setSelectedClass("first")}
                            >First Class</li>
                        </ul>
                    </div>
                    <div className="personal_info border-b pb-2">
                        <h2 className='text-xl font-semibold text-gray-600'>Passenger Information</h2>
                    </div>
                    <div className="name w-full grid xl:grid-cols-3 grid-cols-2 gap-5">
                        <div className='flex gap-x-3 items-center bg-gray-100 px-5 py-3 rounded-lg border'>
                            <div className="icon text-6xl text-gray-500">
                                <FaUser />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className='text-gray-600'>First Name</h3>
                                <input
                                    type='text'
                                    value={props.passengerFirstName}
                                    onChange={(e) => props.setPassengerFirstName(e.target.value)}
                                    placeholder='Your First Name'
                                    className='bg-transparent text-2xl font-semibold focus:outline-none'
                                />
                            </div>
                        </div>
                        <div className="age xl:w-full relative px-5 py-3 bg-gray-100 border flex rounded-lg">
                            <div className='flex gap-x-3 items-center'>
                                <div className="flex flex-col gap-y-2">
                                    <h3 className='text-gray-600'>Your Last Name</h3>
                                    <input
                                        type='text'
                                        value={props.passengerLastName}
                                        onChange={(e) => props.setPassengerLastName(e.target.value)}
                                        placeholder='Your Last Name'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="passport xl:col-span-1 col-span-2 px-5 py-3 bg-gray-100 border flex rounded-lg">
                            <div className='flex gap-x-3 items-center'>
                                <div className="icon text-6xl text-gray-500">
                                    <FaPassport />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <h3 className='text-gray-600'>Passport No</h3>
                                    <input
                                        type='text'
                                        value={props.passportNo}
                                        onChange={(e) => props.setPassportNo(e.target.value)}
                                        placeholder='Your Passport No'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flight_info border-b pb-2">
                        <h2 className='text-xl font-semibold text-gray-600'>Flight Information</h2>
                    </div>
                    <div className='grid xl:grid-cols-7 grid-cols-1 gap-x-8 gap-y-5'>
                        <div className="col-span-4 flex gap-x-4">
                            <div className="from w-[50%] col-span-1 relative px-5 py-3 bg-gray-100 border flex flex-col gap-y-2 rounded-lg">
                                <h3 className='text-gray-600'>From</h3>
                                <FaPlaneDeparture className='absolute right-[40px] top-[20px] text-3xl text-gray-500' />
                                <input
                                    type='text'
                                    value={props.departureAirport}
                                    onChange={(e) => props.setDepartureAirport(e.target.value)}
                                    placeholder='Where from?'
                                    className='bg-transparent text-2xl font-semibold focus:outline-none'
                                />
                                <h3 className='text-gray-800 text-sm'>{"Departure Airport"}</h3>
                            </div>
                            <div className="arrows relative">
                                <div className="absolute left-[50%] bottom-[50%] -translate-x-[50%] translate-y-[50%] rounded-full p-3 bg-gray-100 text-gray-500 outline text-3xl outline-gray-50 z-[2]">
                                    {selectedWay === 'oneway' ? <TbArrowRight /> : <TbArrowsLeftRight />}
                                </div>
                            </div>
                            <div className="to w-[50%] col-span-1 relative px-5 py-3 bg-gray-100 border flex flex-col gap-y-2 rounded-lg">
                                <h3 className='text-gray-600'>To</h3>
                                <FaPlaneArrival className='absolute right-[40px] top-[20px] text-3xl text-gray-500' />
                                <input
                                    type='text'
                                    value={props.destinationAirport}
                                    onChange={(e) => props.setDestinationAirport(e.target.value)}
                                    placeholder='Where to?'
                                    className='bg-transparent text-2xl font-semibold focus:outline-none'
                                />
                                <h3 className='text-gray-800 text-sm'>{"Destination Airport"}</h3>
                            </div>
                        </div>
                        <div className="date col-span-3 relative bg-gray-100 border flex rounded-lg">
                            <div className='w-full px-5 py-3 flex flex-col gap-y-2'>
                                <h3 className='text-gray-600'>Journey Date</h3>
                                <input
                                    type='date'
                                    value={props.journeyDate}
                                    onChange={(e) => props.setJourneyDate(e.target.value)}
                                    className='bg-transparent text-2xl font-semibold focus:outline-none'
                                />
                                <h3 className='text-gray-800 text-sm'>{"Select Journey Date"}</h3>
                            </div>
                            {selectedWay === 'roundtrip' &&
                                <div className='w-full px-5 py-3 flex flex-col gap-y-2 border-l'>
                                    <h3 className='text-gray-600'>Return Date</h3>
                                    <input
                                        type='date'
                                        value={props.returnDate}
                                        onChange={(e) => props.setReturnDate(e.target.value)}
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                    />
                                    <h3 className='text-gray-800 text-sm'>{"Select Return Date"}</h3>
                                </div>
                            }
                        </div>
                        <div
                            className='flex xl:flex-row flex-col sm:items-start items-center gap-5'
                            onClick={() => setIsSeatSelectionOpen(true)}
                        >
                            <div className="date relative px-5 py-3 bg-gray-100 border flex rounded-lg">
                                <div className='flex flex-col gap-y-2'>
                                    <h3 className='text-gray-600'>Seat No</h3>
                                    <input
                                        type='text'
                                        placeholder='Select seat'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                        value={props.selectedSeat && props.selectedSeat}
                                    />
                                    <h3 className='text-gray-800 text-sm'>{props.selectedSeat ? "Seat " + props.selectedSeat + " is selected" : "Click to select seat"}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-lg mt-5 border-t pt-5 font-semibold flex justify-center gap-5'>
                        <button
                            className='w-max bg-blue-500 hover:shadow-md hover:shadow-blue-500/25 text-gray-50 rounded-lg px-5 py-2 flex items-center gap-x-2'
                            onClick={() => props.handleGenerateTicketClick()}
                        >Generate Ticket <BsArrowRight /></button>
                    </div>
                </div>
                {isSeatSelectionOpen &&
                    <div className="fixed top-0 left-0 w-screen h-screen bg-[#33333355] z-[30] flex justify-center items-center">
                        <div className="relative p-8 mt-[85px] bg-gray-50 rounded-xl scroll-x">
                            <h2 className='text-xl font-semibold border-b pb-2 mb-5'>Select Your seat from the map.</h2>
                            <img src={SeatSelectionMap} className='h-[620px]' alt="Seat Selection Map" />
                            <div className="seats absolute top-[225px] left-[50%] -translate-x-[50%]">
                                <div className="row grid grid-cols-2 gap-y-[10px] gap-x-3 w-[76px] text-[12px]">
                                    {seatNo.map((seat, index) =>
                                        <Seat
                                            key={index}
                                            seat={seat}
                                        />
                                    )}
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 py-2 px-3 text-3xl rounded-tr-xl hover:text-rose-500 bg-gray-200 z-50"
                                onClick={() => setIsSeatSelectionOpen(false)}
                            ><MdClose /></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchForm;