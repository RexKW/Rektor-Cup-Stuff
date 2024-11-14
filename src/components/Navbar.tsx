import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/RektorLogo.png';
import scouncil from '../assets/logo-S-sc-2-219x300-1 (1).png';
import emblemuc from '../assets/Emblem UC Surabaya-min.png'; 
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar: React.FC = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  const closeNav = () => {
    setOpenLinks(false);
  };



  return (
    <div className='navbar flex relative'>
      <div className='hidden w-screen' id={openLinks ? "open" : "close"}>
          <Link to="/" onClick={closeNav} className='py-4'>Home</Link>
          <Link to="/countdown" onClick={closeNav} className='py-4'>Countdown</Link>
        </div>

      {/* Logo */}
      
      <div className='navbar-left left-1 absolute'>
        <img src={emblemuc} className='logo' alt='Emblem UC Logo' />
        <img src={scouncil} className='logo' alt='Student Council Logo' /> {/* Add new logo */}
        <img src={logo} className='logo' alt='Logo' /> {/* Add new logo */}
      </div>

      {/* Navigation Links */}
      <div className='Front flex absolute bottom-5 right-5'>
        <div className='navbar-right mr-5'>
          <Link to="/" onClick={closeNav}>Home</Link>
          <Link to="/countdown" onClick={closeNav} >Countdown</Link>
        </div>
        <button onClick={toggleNav} id="burger" className='burger mb-2 mr-1'>
          <ReorderIcon />
        </button>

        
      </div>
    </div>
  );
}

export default Navbar;