import './App.css';
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import CastandCrew from './Cast&Crew';
import NewArrivals from './NewArrivals';
import Women from './Women';
import Men from './Men';
import Navigation from './Navigation';
import Home from './Home';
import UnStitched_Collection from './Unstitched_Collection';
import SignUpSection from './SignUp';
import Footer from './Footer';

import UnStitched from './UnStitched';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/NewArrivals" element={<NewArrivals />}></Route>
      <Route path="/NewArrivals/UnStitched-Collection" element={<UnStitched_Collection />}></Route>
      <Route path="/NewArrivals/UnStitched-Collection/Cloth" element={<UnStitched />}></Route>
      <Route path="/Cast-and-Crew" element={<CastandCrew />}></Route>
      <Route path="/Women" element={<Women />}></Route>
      <Route path="/Men" element={<Men />}></Route>
    </Routes>
    </BrowserRouter>

    <br /> <br /> <br />
    <SignUpSection />
    <br />
    <Footer />

    </>
  );
}

export default App;
