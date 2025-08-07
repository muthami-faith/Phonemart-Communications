import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // You can rename to Footer.css for clarity

const Footer2 = () => {
  return (
    <footer className='footer-bg text-dark pt-1 pb-4'>
      <div className='container'>
        <div className='row'>

          {/* Column 1: Social Media & Contact */}
          <div className='col-md-4 mb-4'>
            <h4 className='footer-title'>Follow Us</h4>
            <p className='mb-2'>@phonemartcommunications</p>
            <div className='d-flex gap-3 mb-3'>
              <a href="https://www.instagram.com/phonemartcommunications/"><img src="instagram.png" alt="Instagram" className="footer-icon" /></a>
              <a href="https://www.tiktok.com/@phonemartcommunications"><img src="tt.webp" alt="Tiktok" className="footer-icon" /></a>
              <a href="https://www.youtube.com/channel/UC6SXJmmovrRSjYAz7we-6Jg"><img src="youtube.png" alt="YouTube" className="footer-icon" /></a>
            </div>

            <h4 className='footer-title'>Contact Us</h4>
            <div className='d-flex align-items-center gap-2'>
              <img src="13936.png" alt="Phone Icon" className="footer-icon-small" />
              <span className="fw-bold">+254 720 505 008</span>
            </div>
          </div>

          {/* Column 2: About */}
          <div className='col-md-4 mb-4'>
            <h4 className='footer-title'>About Phonemart</h4>
            <p className='footer-text'>
              <i>
                We are a leading phone sales enterprise for Phone and Mobile Accessories. Learn more{' '}
                <Link to="/aboutus" className="footer-link fs-5">About Us</Link>.
              </i>
            </p>
            <p className='footer-text'>
              Visit us at <i className='text-decoration-underline'>Ground floor, Tabby House, Thika Town</i>
            </p>
          </div>

          {/* Column 3: Newsletter */}
          <div className='col-md-4 mb-4'>
            <h4 className='footer-title'>Stay Updated</h4>
            <p>Subscribe to our newsletter:</p>
            <input
              type="email"
              placeholder='Enter your email'
              className='form-control mb-2 footer-input'
            />
            <button type='submit' className='btn footer-btn'>
              Subscribe
            </button>
          </div>
        </div>
        <hr />
        <p className='text-center text-muted mb-0'>&copy; {new Date().getFullYear()} Phonemart Communications</p>
      </div>
    </footer>
  );
};

export default Footer2;
