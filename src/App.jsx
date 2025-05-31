import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import Movies from './components/Movies';
import TalkShows from './components/TalkShows';
import StandUpComedy from './components/StandUpComedy';
import MovieDetail from './components/MovieDetail';
import ShowDetail from './components/ShowDetail';
import Booking from './components/Booking';
import AboutUs from './components/AboutUs';
import './App.css';
import './PageTransition.css'; // Import the CSS for transitions
// import NavBar from './components/NavBar';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/talkshows" element={<TalkShows />} />
            <Route path="/talkshows/:id" element={<ShowDetail />} />
            <Route path="/standupcomedy" element={<StandUpComedy />} />
            <Route path="/standupcomedy/:id" element={<ShowDetail />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
