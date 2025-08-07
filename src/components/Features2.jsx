import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Features2 = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { acc, img_url } = location.state || {};

    const handleAddToCart = () => {
        addToCart();
    };

     const handleBuyNow = () => {
        navigate('/payments');
    };



    return (
        <div className="container-fluid mb-2">
            <div className="row border rounded shadow-sm p-4 bg-white">

                {/* Left Column: Image */}
                <div className="col-md-6 d-flex align-items-center justify-content-center border-end">
                    <img
                        src={img_url + acc.acc_photo}
                        alt={acc.acc_name}
                        className="img-fluid rounded"
                        style={{ maxHeight: '350px', objectFit: 'cover' }}
                    />
                </div>

                {/* Right Column: Details */}
                <div className="col-md-6 ps-4">
                    <h2 className="fw-bold mb-3 border-bottom pb-2">{acc.acc_name}</h2>
                    <p><strong>Brand:</strong> <span className='fs-5'>{acc.acc_brand}</span></p>

                    {/* Storage Selector */}

                    {/* Price */}
                    <p>
                        <strong>Price:</strong>{' '}
                        <span className="fs-5 fw-semibold" style={{ color: 'red' }}>
                            Ksh {acc.acc_cost}
                        </span>
                    </p>

                    {/* Buttons */}
                    {/* <button
                        className="btn mt-3 fw-bold px-4 text-white"
                        style={{ backgroundColor: '#20EA34' }}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button> */}

                    <button
                        className="btn mt-3 fw-bold px-4 text-white ms-3"
                        style={{ backgroundColor: '#20EA34' }}
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Features2;
