import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import UpdateProductImages from './UpdateProductImages';

const Features = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { product, img_url } = location.state || {};

    const storages = product?.storages || [];

    // Set default selected storage
    const [selectedStorage, setSelectedStorage] = useState(storages[0]);

    // Create list of available images
    const allImages = [
        product.product_photo && img_url + product.product_photo,
        product.secondary_photo1 && img_url + product.secondary_photo1,
        product.secondary_photo2 && img_url + product.secondary_photo2,
    ].filter(Boolean); // Remove null or undefined

    const [mainImage, setMainImage] = useState(allImages[0]);

    if (!product || storages.length === 0) {
        return <p className="text-center mt-5">No phone or storage options available.</p>;
    }

    const finalPrice = selectedStorage?.price || 0;

    const handleAddToCart = () => {
        const updatedProduct = {
            ...product,
            selectedStorage: selectedStorage.size,
            finalPrice,
        };
        addToCart(updatedProduct);
    };

    const handleBuyNow = () => {
        const updatedProduct = {
            ...product,
            selectedStorage: selectedStorage.size,
            finalPrice,
        };
        navigate('/payments', { state: { product: updatedProduct, img_url } });
    };

    return (
        <div className="container-fluid mb-2">
            <div className="row border rounded shadow-sm p-4 bg-white">
                {/* Left Column: Images */}
                <div className="col-md-6 d-flex flex-column align-items-center border-end">
                    {/* Main Image */}
                    <img
                        src={mainImage}
                        alt={product.product_name}
                        className="img-fluid rounded mb-3"
                        style={{ maxHeight: '350px', objectFit: 'cover' }}
                    />

                    {/* Thumbnails */}
                    <div className="d-flex overflow-auto">
                        {allImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`thumbnail-${idx}`}
                                onClick={() => setMainImage(img)}
                                style={{
                                    height: '70px',
                                    width: '70px',
                                    objectFit: 'cover',
                                    marginRight: '10px',
                                    border: img === mainImage ? '2px solid #20EA34' : '1px solid #ccc',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="col-md-6 ps-4">
                    <h2 className="fw-bold mb-3 border-bottom pb-2">{product.product_name}</h2>
                    <p><strong>Brand:</strong> <span className='fs-5'>{product.product_description}</span></p>

                    <div>
                        <strong>Phone Features:</strong>
                        <ul className="fs-5">
                            {product.features?.split(',').map((feature, index) => (
                                <li key={index}>{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Storage Selector */}
                    <div className="mb-3">
                        <strong>Select Storage:</strong>
                        <div className="mt-2">
                            {storages.map(option => (
                                <button
                                    key={option.size}
                                    className={`btn me-2 mb-2 ${selectedStorage.size === option.size ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setSelectedStorage(option)}
                                >
                                    {option.size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Display */}
                    <p>
                        <strong>Price:</strong>{' '}
                        <span className="fs-5 fw-semibold" style={{ color: 'red' }}>
                            {finalPrice.toLocaleString()}
                        </span>
                    </p>

                    {/* Action Buttons */}
                    <button
                        className="btn mt-3 fw-bold px-4 text-white"
                        style={{ backgroundColor: '#20EA34' }}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                    <button
                        className="btn mt-3 fw-bold px-4 text-white ms-3"
                        style={{ backgroundColor: '#20EA34' }}
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                    <div className="mt-4">
                        <UpdateProductImages productId={product.product_id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
