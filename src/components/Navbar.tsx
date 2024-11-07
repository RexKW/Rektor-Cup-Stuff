import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import '../styles/Navbar.css';
import logo from '../assets/RektorLogo.png';

const Navbar: React.FC = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const { width } = useWindowSize();

  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  const closeNav = () => {
    setOpenLinks(false);
  };

  useEffect(() => {
    if (openLinks && width < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openLinks, width]);

  return (
    <div className='navbar flex'>
      {/* Logo */}
      <div className='navbar-left left-1 absolute'>
        <img src={logo} className='logo' alt='Logo' />
      </div>

      {/* Navigation Links */}
      <div className='Front flex absolute bottom-5 right-5'>
        <div className='navbar-right mr-5 mb-2'>
          <Link to="/" onClick={closeNav}>Home</Link>
          <Link to="/countdown" onClick={closeNav}>Countdown</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;