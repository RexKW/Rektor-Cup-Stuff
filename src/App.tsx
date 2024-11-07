import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Countdown from './pages/Countdown';
import Footer from './components/Footer'
import 'flowbite/dist/flowbite.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<Countdown />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/schedule" element={<Schedule />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
