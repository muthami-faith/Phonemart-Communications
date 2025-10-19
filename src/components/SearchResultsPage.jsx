import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css'; // Contains shared styles

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const location = useLocation();  
  const navigate = useNavigate();
  
  const img_url = "https://ninjafaith.pythonanywhere.com/static/images/";
  const query = new URLSearchParams(location.search).get('query') || "";

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, query]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://ninjafaith.pythonanywhere.com/api/get_product_details');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  const filterProducts = () => {
    const filteredList = products.filter((item) =>
      item.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredList);
  };

  return (
    <div className="container-fluid py-4">
      <h4 className="mb-4 text-start">
        Search results for: <strong>"{query}"</strong>
      </h4>
      <hr />

      {filtered.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="row">
          {filtered.map(product => (
            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center" key={product.id}>
              <div className="card h-100 border-1 custom-card" onClick={() => navigate('/features', { state: { product, img_url } })} 
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px #20EA34',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease',
                }}>
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top p-3 rounded"
                  style={{
                    height: '220px',
                    objectFit: 'contain'
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-bold" style={{ color: '#000000' }}>
                    {product.product_name}
                  </h6>
                  <p className="card-text text-muted small fst-italic">
                    {product.product_description?.slice(0, 60)}...
                  </p>
                  <p className="card-text mb-2">
                    <span className="fw-bold" style={{ color: '#20EA34' }}>Price:</span>{" "}
                    <span style={{ color: '#000000' }}>{product.price_range}</span>
                  </p>
                  <button
                    onClick={() => navigate('/features', { state: { product, img_url } })}
                    className="btn mt-auto fw-semibold btn-view"
                  >
                    View Features
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <hr className="my-5" />
    </div>
  );
};

export default SearchResultsPage;
