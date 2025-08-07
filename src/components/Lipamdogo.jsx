import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import './Header.css'

const Lipamdogo = () => {
  const providers = [
    {
      name: 'Wabeh',
      image: 'wabehmobile.png',
      link: 'https://wabeh.com/',
    },
    {
      name: 'Mogo',
      image: 'mogo.png',
      link: 'https://www.mogo.co.ke/',
    },
    {
      name: 'Onfon Mobile',
      image: 'onfonmobile.png',
      link: 'https://www.onfonmobile.com/',
    },
    {
      name: 'Watu Simu',
      image: 'watu.png',
      link: 'https://watuafrica.com/watu-simu/',
    },
  ];

  return (
    <div className="container mt-3">
      <div className="text-center mb-4">
        <h2 style={{ color: '#20EA34' }}>Lipa Pole Pole</h2>
        <p className="text-muted">Get your phone on loan with the most affordable deposits</p>
        <hr className="w-50 mx-auto" />
      </div>

      <div className="row mb-4 text-center">
        <div className="col-md-6 mb-3">
          <i className="bi bi-telephone fs-1 contact-icon"></i>
          <h5 className="mt-2">Call Us</h5>
          <p className="text-muted">+254 720 505 008</p>
        </div>
        <div className="col-md-6 mb-3">
          <i className="bi bi-envelope fs-1 contact-icon"></i>
          <h5 className="mt-2">Email Us</h5>
          <p className="text-muted">phonemartcommunications@gmail.com</p>
        </div>
      </div>

      <div className="row">
        {providers.map((provider, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm h-100 text-center p-3 border-0">
              <img
                src={provider.image}
                alt={provider.name}
                className="card-img-top mx-auto mb-3"
                style={{ width: '120px', height: '60px', objectFit: 'contain' }}
              />
              <h6 className="mb-3">{provider.name}</h6>
              <Link
                to={provider.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000000', border: "3px solid #20EA34"}}
              >
                Visit Site
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lipamdogo;
