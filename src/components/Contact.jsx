import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css'

const Contact = () => {
  return (
    <div className="container-fluid py-4">
      <h2 className="text-center mb-3 fw-bold" style={{ color: '#20EA34' ,textDecoration: "underline"}}>
        Get in Touch
      </h2>
      <hr />

      <div className="row justify-content-center">
        {/* Call Us Card */}
        <div className="col-md-5 col-sm-10 mb-4">
          <div className="contact-card text-center p-4">
            <div className="card-body">
              <i className="bi bi-telephone contact-icon mb-3"></i>
              <h5 className="card-title fw-semibold">Call Us</h5>
              <p className="card-text text-muted">+254 720 505 008</p>
            </div>
          </div>
        </div>

        {/* Email Us Card */}
        <div className="col-md-5 col-sm-10 mb-4">
          <div className="contact-card text-center p-4">
            <div className="card-body">
              <i className="bi bi-envelope contact-icon mb-3"></i>
              <h5 className="card-title fw-semibold">Email Us</h5>
              <p className="card-text text-muted">phonemartcommunications@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
