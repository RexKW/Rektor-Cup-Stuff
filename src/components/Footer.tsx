import React from 'react';
import '../styles/Footer.css';
import ucLogo from '../assets/Emblem UC Surabaya-min.png';
import rektorLogo from '../assets/RektorLogo.png';

const Footer: React.FC = () => {
  return (
    <div className='footer flex'>
      <div className='left flex'>
        <img src={ucLogo} id='ucLogo' alt="UC Logo" />
        <img src={rektorLogo} id='rektorLogo' alt="VR Rektor Logo" />
        {/* <img src={oLogo} id='oLogo' alt="Oweek Logo" /> */}
      </div>
      <div className='middle'>
        
      </div>
      <div className='right flex flex-col sm:text-base'>
        <p>Contact Person Line</p>
        <p>Escape: @593ddleh</p>
        <p>RektorCup: @593ddleh</p>
      </div>
    </div>
  );
}

export default Footer;
