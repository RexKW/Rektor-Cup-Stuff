
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Countdown from './pages/Countdown';
import 'flowbite/dist/flowbite.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import EscapeRoom from './pages/EscapeRoom';
import Sponsor from './pages/Sponsor';

const App = () => {
  return (
    <ParallaxProvider>
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/escaperoom" element={<EscapeRoom />} />
          <Route path="/sponsor" element={<Sponsor/>}/>

          {/* <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/schedule" element={<Schedule />} /> */}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
    </ParallaxProvider>
  );
};

export default App;
