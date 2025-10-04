import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search)}`);
      setShowSearchModal(false); // Close modal on mobile
    }
  };

  return (
    <header className="main-header">
      <div className="container-fluid bg-light shadow-sm py-2 px-3">
        <div className="row align-items-center justify-content-between">

          {/* Logo */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <Link to="/" className="nav-link p-0">
              <img
                src="phonemartlogo1.PNG"
                alt="logo"
                className="img-fluid"
                style={{ height: '60px', objectFit: 'contain', mixBlendMode: 'multiply', backgroundColor: 'transparent', transition: 'all 0.3s ease-in-out', border: '8px' }}
              />
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="col-md-6 d-none d-md-block">
            <form role="search" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search for phones, accessories, brands..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn text-white"
                  type="submit"
                  style={{
                    backgroundColor: '#20EA34',
                    border: '3px solid #20EA34'
                  }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Icons & Mobile Search Icon */}
          <div className="col-6 col-md-3 d-flex justify-content-end align-items-center gap-3">

            {/* Search Icon on Mobile */}
            <button
              className="btn d-md-none p-0"
              onClick={() => setShowSearchModal(true)}
            >
              <i className="fas fa-search fs-5 text-dark"></i>
            </button>

            {/* Contact */}
            <Link to="/contact" className="text-dark text-decoration-none text-center d-none d-md-block">
              <div className="d-flex flex-column align-items-center">
                <i className="fas fa-phone-alt fs-5"></i>
                <span className="small" style={{ color: '#20EA34' }}><b>Contact Us</b></span>
              </div>
            </Link>

            {/* Cart */}
            <Link to="/cartpage" className="text-dark text-decoration-none text-center">
              <div className="d-flex flex-column align-items-center">
                <i className="fas fa-shopping-cart fs-5">({cartItems.length})</i>
                <span className="small" style={{ color: '#20EA34' }}><b>Cart</b></span>
              </div>
            </Link>

            {/* Login */}
            <Link to="/signin" className="text-dark text-decoration-none text-center">
              <div className="d-flex flex-column align-items-center">
                <i className="fas fa-user fs-5"></i>
                <span className="small" style={{ color: '#20EA34' }}><b>Login</b></span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {showSearchModal && (
        <div className="search-modal">
          <div className="search-modal-content">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search for phones, accessories, brands..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
                <button
                  className="btn text-white"
                  type="submit"
                  style={{ backgroundColor: '#20EA34' }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <button className="btn btn-link mt-2 text-danger" onClick={() => setShowSearchModal(false)}>
              <i className="fas fa-times"></i> Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
