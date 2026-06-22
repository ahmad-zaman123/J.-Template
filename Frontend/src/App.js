import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CastandCrew from './Cast&Crew';
import NewArrivals from './NewArrivals';
import Women from './Women';
import Men from './Men';
import Navigation from './Navigation';
import Home from './Home';
import UnstitchedCollection from './Unstitched_Collection';
import SignUpSection from './SignUp';
import Footer from './Footer';
import UnStitched from './UnStitched';
import CategoryPage from './CategoryPage';
import BoysandGirls from './BoysandGirls';
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewArrivals" element={<NewArrivals />} />
          <Route path="/NewArrivals/UnStitched-Collection" element={<UnstitchedCollection />} />
          <Route path="/NewArrivals/UnStitched-Collection/Cloth" element={<UnStitched />} />
          <Route path="/Cast-and-Crew" element={<CastandCrew />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />

          {/* Category pages */}
          <Route path="/Boys-and-Girls" element={<><BoysandGirls /><CategoryPage title="BOYS & GIRLS" category="kids" /></>} />
          <Route path="/Fragrances" element={<CategoryPage title="FRAGRANCES" category="fragrance" />} />
          <Route path="/Makeup" element={<CategoryPage title="MAKE UP" category="accessories" />} />
          <Route path="/SkinCare" element={<CategoryPage title="SKIN CARE" category="accessories" />} />

          {/* Guest checkout + order confirmation */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
        </Routes>

        <br /> <br /> <br />
        <SignUpSection />
        <br />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
