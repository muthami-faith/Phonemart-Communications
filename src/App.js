import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homephm from './components/Homephm';
import Navbar from './components/Navbar';
import Addphone from './components/Addphone';
import Phones from './components/Phones';
import Accessories from './components/Accessories';
import Lipamdogo from './components/Lipamdogo';
import Header from './components/Header';
import Features from './components/Features';
import Makepayment from './components/Makepayment';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Payments from './components/Payments';
import CartPage from './components/CartPage';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import SearchResultsPage from './components/SearchResultsPage';
import Contact from './components/Contact';
import Footer2 from './components/Footer2';
import Addacc from './components/Addacc';
import Productinput from './components/Productinput';
import Features2 from './components/Features2';
import Aboutus from './components/Aboutus';

// Improved ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  const lastPathnameRef = useRef(pathname);

  useEffect(() => {
    if (lastPathnameRef.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // smooth scroll effect
      });
      lastPathnameRef.current = pathname;
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop /> {/* ✅ Smooth scroll to top on page change */}
        <header
          className='App-header'
          style={{ backgroundColor: '#000', color: '#20EA34' }}
        >
          
        </header>

        <Header />
        <Navbar />

        <Routes className="container-fluid">
          <Route path='/' element={<Homephm />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path='/addphone' element={<Addphone />} />
          <Route path='/addacc' element={<Addacc />} />
          <Route path='/' element={<Phones />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/lipamdogo' element={<Lipamdogo />} />
          <Route path='/features' element={<Features />} />
          <Route path='/features2' element={<Features2 />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/productinput' element={<Productinput />} />
          <Route path='/aboutus' element={<Aboutus />} />
        </Routes>

        <Footer />
        <Footer2 />
      </CartProvider>
    </Router>
  );
}

export default App;
