import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUserName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For popup menu

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUserName(parsedUser.username);
    }
  }, []);

  // Handle closing popup on outside click (optional)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('popup-overlay')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      <section className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-light bg-light d-flex justify-content-between px-3 py-2">
            <div className="d-none d-md-flex align-items-center gap-4 fw-bold fs-6">
            <Link to="/" className="nav-link p-0 text-dark">Phones</Link>
            <Link to="/accessories" className="nav-link p-0 text-dark">Mobile Accessories</Link>
            <Link to="/lipamdogo" className="nav-link p-0 text-dark">Lipa Pole Pole</Link>
          </div>


            {/* Hamburger Toggler */}
            <button
              className="navbar-toggler border-0"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <span className="navbar-toggler-icon d-md-none"></span>
            </button>
          </nav>
        </div>
      </section>

      {/* Popup Menu */}
      {isMenuOpen && (
        <div className="popup-overlay">
          <div className="popup-menu">
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
            <nav className="nav flex-column text-center mt-5">
              <Link to="/" className="popup-link" onClick={() => setIsMenuOpen(false)}>Phones</Link>
              <Link to="/accessories" className="popup-link" onClick={() => setIsMenuOpen(false)}>Mobile Accessories</Link>
              <Link to="/lipamdogo" className="popup-link" onClick={() => setIsMenuOpen(false)}>Lipa Pole Pole</Link>
            </nav>
          </div>
        </div>

      )}
    </>
  );
};

export default Navbar;
