import './App.css';

import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Ticket from './components/Ticket';

const App = () => {
  const [isTicketShowing, setIsTicketShowing] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("");
  const [passengerFirstName, setPassengerFirstName] = useState("");
  const [passengerLastName, setPassengerLastName] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleNewTicketClick = () => {
    setIsTicketShowing(false);
  }

  const handleGenerateTicketClick = () => {
    setIsTicketShowing(true);
  }

  return (
    <div>
      <Header />
      <Hero />
      {
        isTicketShowing ?
          <Ticket
            handleNewTicketClick={handleNewTicketClick}
            handleGenerateTicketClick={handleGenerateTicketClick}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
            passengerFirstName={passengerFirstName}
            setPassengerFirstName={setPassengerFirstName}
            passengerLastName={passengerLastName}
            setPassengerLastName={setPassengerLastName}
            passportNo={passportNo}
            setPassportNo={setPassportNo}
            departureAirport={departureAirport}
            setDepartureAirport={setDepartureAirport}
            destinationAirport={destinationAirport}
            setDestinationAirport={setDestinationAirport}
            journeyDate={journeyDate}
            setJourneyDate={setJourneyDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
          /> :
          <SearchForm
            handleGenerateTicketClick={handleGenerateTicketClick}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
            passengerFirstName={passengerFirstName}
            setPassengerFirstName={setPassengerFirstName}
            passengerLastName={passengerLastName}
            setPassengerLastName={setPassengerLastName}
            passportNo={passportNo}
            setPassportNo={setPassportNo}
            departureAirport={departureAirport}
            setDepartureAirport={setDepartureAirport}
            destinationAirport={destinationAirport}
            setDestinationAirport={setDestinationAirport}
            journeyDate={journeyDate}
            setJourneyDate={setJourneyDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
          />
      }
      <Footer />
    </div>
  );
};

export default App;