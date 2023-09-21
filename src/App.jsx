import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import InstructionsPage from './pages/InstructionsPage';
import bgImage from './assets/images/bgimage.jpg';
import TicketPage from './pages/TicketPage';
import SearchResult from './pages/SearchResult';

const App = () => {
  return (
    <Router>
      <div
        className="App flex flex-col justify-between h-screen"
        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="instructions" element={<InstructionsPage />} />
          <Route path="ticket" element={<TicketPage />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
