import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const footerItems = [
    {
      icon: 'fas fa-shipping-fast',
      text: 'Countrywide Delivery',
      image: 'fast-delivery.png',
    },
    {
      icon: 'fas fa-check-circle',
      text: 'Quality Guarantee',
      image: '8922619.png',
    },
    {
      icon: 'fas fa-tags',
      text: 'Great Prices',
      image: '726559.png',
    },
    {
      icon: 'fas fa-headset',
      text: 'Support 24/7',
      image: '13936.png',
    },
  ];

  return (
    <div className="container-fluid bg-light py-4 mt-3">
      <div className="row justify-content-center text-center">
        {footerItems.map((item, index) => (
          <div key={index} className="col-md-3 mb-2 d-flex flex-column align-items-center">
            <div className="footer-icon mb-2" style={{ width: '70px', height: '70px' }}>
              <img
                src={item.image}
                alt={item.text}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ color: '#20EA34', fontSize: '1.1rem', fontWeight: '600' }}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>

  );
};

export default Footer;
