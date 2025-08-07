import React from 'react';
import './Header.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Phonemart Communications</h1>

      <p className="intro">
        Welcome to <strong>Phonemart Communications</strong> — Your Trusted Mobile Partner in <strong>Thika</strong>!
      </p>

      <p className="description">
        Located at <strong>Commercial Street, Thika</strong>, on the <strong>Ground Floor of Tabby House</strong>, Phonemart Communications is your one-stop shop for all things mobile.
        Whether you're looking to upgrade your phone, find essential accessories, or get your device repaired, we've got you covered with quality products and reliable services.
      </p>

      <h2 className="section-title">What We Offer</h2>
      <ul className="services-list">
        <li><strong>📱 Phone Sales</strong> – New and top-brand smartphones.</li>
        <li><strong>🔌 Mobile Accessories</strong> – Chargers, earphones, screen protectors, and more.</li>
        <li><strong>🛠 Phone Repair Services</strong> – Fast, affordable, and professional repairs.</li>
      </ul>

      <h2 className="section-title">Opening Hours</h2>
      <ul className="hours-list">
        <li><strong>Monday – Saturday:</strong> 8:00 AM – 9:30 PM</li>
        <li><strong>Sunday:</strong> 10:30 AM – 8:30 PM</li>
      </ul>

      <h2 className="section-title">Contact Us</h2>
      <p className="contact">
        <strong>📍 Location:</strong> Ground Floor, Tabby House, Commercial Street, Thika<br />
        <strong>📞 Phone:</strong> <a href="tel:+254720505008" className="phone-link">+254 720 505008</a>
      </p>
    </div>
  );
};

export default Aboutus;
