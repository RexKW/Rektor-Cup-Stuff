import React, { useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { logout } from '../apis/UserCRUD';
import '../styles/Navbar.css';
// import logo from '../assets/RektorLogo.png';
import scouncil from '../assets/logo-S-sc-2-219x300-1 (1).png';
// import emblemuc from '../assets/Emblem UC Surabaya-min.png';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar: React.FC = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  const closeNav = () => {
    setOpenLinks(false);
  };

  const account = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const logoutUser = async () =>{
        try{
            if(account && token){
                const response = await logout(account,token )
                 if(response){
                    localStorage.removeItem('username');
                    localStorage.removeItem('token')
                     navigate("/")
                }
            }
            
          
        }catch(error){
            console.log(error)
        }
        
    
    }

    
    const handleLogout = (e: React.FormEvent) => {
      e.preventDefault(); 
      logoutUser();
    };

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className={`navbar flex relative ${isAdmin ? 'bg-[#487F99]':''}`}>
      {!isAdmin ? (
        <>
          <div className="hidden w-screen" id={openLinks ? 'open' : 'close'}>
            <Link to="/" onClick={closeNav} className="py-4">
              Home
            </Link>
            <Link to="/countdown" onClick={closeNav} className="py-4">
              Countdown
            </Link>
            <Link to="/sponsor" onClick={closeNav} className="py-4">
              Sponsor
            </Link>
            <Link to="/competitions" onClick={closeNav} className="py-4">
              Competitions
            </Link>

            <Link to="/timeline" onClick={closeNav} className="py-4">
              Timeline
            </Link>
            <Link to="/rules" onClick={closeNav} className="py-4">
                Rules
              </Link>
          </div>
          <div className="navbar-left left-1 absolute">
            <img src={scouncil} className="logo" id="logo1" alt="Student Council Logo" /> {/* Add new logo */}
          </div>

          <div className="Front flex absolute bottom-[21%] right-5">
            <div className="navbar-right mr-5 mb-2">
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
              {/* <Link to="/escaperoom" onClick={closeNav} >Escape Room</Link> */}
              <Link to="/countdown" onClick={closeNav}>
                Countdown
              </Link>
              <Link to="/sponsor" onClick={closeNav}>
                Sponsor
              </Link>
              <Link to="/competitions" onClick={closeNav}>
                Competitions
              </Link>
              <Link to="/timeline" onClick={closeNav}>
                Timeline
              </Link>
              <Link to="/rules" onClick={closeNav}>
                Rules
              </Link>
            </div>
            <button onClick={toggleNav} id="burger" className="burger mb-3 mr-1">
              <ReorderIcon />
            </button>
          </div>
        </>
      ) : (
        <>
        <div className="hidden w-screen" id={openLinks ? 'open' : 'close'}>
          <Link to="/admin/dashboard" onClick={closeNav} className="py-4">
            Dashboard
          </Link>
        </div>
        <div className="navbar-left left-1 absolute ">
          <img src={scouncil} className="logo" id="logo1" alt="Student Council Logo" />
        </div>

        <div className="Front flex absolute bottom-5 right-5 ">
          <div className="navbar-right mr-5 mb-2">
            <Link to="/admin/dashboard" onClick={closeNav}>
              Dashboard
            </Link>
            <form onSubmit={handleLogout}>
              <button className='text-white text-2xl hover:text-red-400 transition duration-200'>Logout</button>
            </form>

          </div>
          <button onClick={toggleNav} id="burger" className="burger mb-2 mr-1">
            <ReorderIcon />
          </button>
        </div>
      </>
      )}
    </nav>
  );
};

export default Navbar;
