import React from 'react';
import '../styles/Footer.css';
import acqLogo from '../assets/AcqLogo.png';
import ucLogo from '../assets/Emblem UC Surabaya-min.png';
import oLogo from '../assets/Logo Oweek Putih.png';
import VRrektor from '../assets/VRrektor.png';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='left flex'>
        <img src={ucLogo} id='ucLogo' alt="UC Logo" />
        {/* <img src={oLogo} id='oLogo' alt="Oweek Logo" /> */}
      </div>
      <div className='middle'>
        {/* <img src={acqLogo} id='acqLogoF' alt="Acquisition Logo" /> */}
        <img src={VRrektor} id='vrRektor' alt="VR Rektor Logo" />
      </div>
      <div className='right flex flex-col sm:text-base'>
        <p>Contact Person</p>
        <p>Line CP: @593ddleh</p>
      </div>
    </div>
  );
}

export default Footer;
