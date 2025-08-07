import React from 'react';
import { useCart } from './CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const img_url = "https://ninjafaith.pythonanywhere.com/static/images/";

  // Optional: helper function for grand total
  const getGrandTotal = () =>
    cartItems.reduce((sum, item) => sum + (item.finalPrice || 0), 0);

  // Fix remove logic: include selectedStorage
  const handleRemove = (productToRemove) => {
    removeFromCart(productToRemove); // Must match both id + storage in context
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🛒 Your Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center py-4 rounded shadow-sm">
          <h5 className="mb-2">Your cart is empty</h5>
          <p className="text-muted">Browse our products and add items to your cart.</p>
          <a href="/" className="btn btn-success mt-2 px-4">
            🛍 Start Shopping
          </a>
        </div>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((product, index) => (
              <li
                key={`${product.id}-${product.selectedStorage || 'default'}`}
                className="list-group-item mb-3 rounded shadow-sm p-3"
                style={{
                  border: '2px solid #20EA34',
                  backgroundColor: '#f8fff8'
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    className="card-img-top p-2 rounded"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                  <div className="flex-grow-1 ps-3">
                    <h6 className="mb-1 fw-semibold">{product.product_name}</h6>
                    {product.selectedStorage && (
                      <p className="mb-1">Storage: <strong>{product.selectedStorage}</strong></p>
                    )}
                    <p className="mb-1 text-muted">
                      Price: <strong>{product.finalPrice?.toLocaleString()}</strong>
                    </p>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemove(product)}
                  >
                    🗑 Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

        {/* ✅ Grand Total - Corrected
        <div className="d-flex justify-content-end mt-4 mb-2">
        <div
            className="p-3 rounded shadow"
            style={{
            backgroundColor: 'white',
            border: '2px solid #20EA34',
            minWidth: '180px',
            textAlign: 'right'
            }}
        >
            <h5 className="mb-0" style={{ color: 'black' }}>
            Grand Total: <br />
            <span style={{ fontSize: '1.2rem', color: 'red' }}>
                Ksh {getGrandTotal().toLocaleString()}
            </span>
            </h5>
        </div>
        </div> */}
        </>
      )}
    </div>
  );
}
