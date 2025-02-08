
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login'
import Countdown from './pages/Countdown';
import UpdateCompetition from './pages/UpdateCompetition';
import 'flowbite/dist/flowbite.css';
import { ParallaxProvider } from 'react-scroll-parallax';
// import EscapeRoom from './pages/EscapeRoom';
import Sponsor from './pages/Sponsor';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import AddCompetition from './pages/AddCompetition';
import Competitions from './pages/Competitions'
import ViewCompetition from './pages/ViewCompetition';
import Timeline from './pages/Timeline'
import  Rules from './pages/Rules';

const App = () => {


  return (
    <ParallaxProvider>
    <div className="App ">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<Countdown />} />
          {/* <Route path="/escaperoom" element={<EscapeRoom />} /> */}
          <Route path="/sponsor" element={<Sponsor/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="/competitions" element={<Competitions/>}/>
          <Route path="/competitions/:id" element={<ViewCompetition/>}/>
          <Route path ="/rules" element={<Rules/>}/>
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <Routes>
                <Route path='/dashboard' element={<Admin/>}/>
                <Route path='/createCompetition' element={<AddCompetition/>}/>
                <Route path='/dashboard' element={<Admin/>}/>
                <Route path="/updateCompetition/:id" element={<UpdateCompetition />} />
                </Routes>
              </PrivateRoute>
            }
          ></Route>
          
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
