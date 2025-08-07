import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import './Header.css';

const Homephm = () => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const img_url = "https://ninjafaith.pythonanywhere.com/static/images/";

    const getproducts = async () => {
        setLoading("Please wait...");
        try {
            const response = await axios.get("https://ninjafaith.pythonanywhere.com/api/get_product_details");
            setProduct(response.data);
            setLoading("");
            setError("");
        } catch (error) {
            setLoading("");
            setError("Something went wrong. Please try again later.");
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    const filtered_products = product.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
    );

    const groupedProducts = {};
    filtered_products.forEach((product) => {
        const brand = product.product_description.trim();
        if (!groupedProducts[brand]) {
            groupedProducts[brand] = [];
        }
        groupedProducts[brand].push(product);
    });

    return (
        <div className="container-fluid">
            {loading && <div className="alert alert-info text-center">{loading}</div>}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            <Carousel />

            <marquee behavior="scroll" direction="left" className="text-dark fw-semibold my-3 fs-6">
                <i>Upgrade your Mobile Lifestyle today</i>
            </marquee>

           
            <h3 className="text-start mb-3" style={{ color: '#000000' }}>
                <b>🔥 Pocket Friendly Prices</b>
            </h3>
            <hr />

            {Object.keys(groupedProducts).sort().map((brand) => (
                <div key={brand} className="mb-2">
                    <h4 className="text-start mb-3" style={{ color: '#20EA34' }}>
                        <b>{brand}</b>
                    </h4>
                    <div className="row">
                        {groupedProducts[brand].slice(0, 4).map((product) => (
                            <div key={product.product_id} className="col-6 col-md-3 mb-4">
                                <div className="card h-100  border-1 custom-card">
                                    <img
                                        src={img_url + product.product_photo}
                                        alt={product.product_name}
                                        className="card-img-top p-3 rounded"
                                        style={{ height: '220px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title fw-bold" style={{ color: '#000000' }}>
                                            {product.product_name}
                                        </h6>
                                        <p className="card-text text-muted small fst-italic">
                                            {product.product_description.slice(0, 60)}...
                                        </p>
                                        <p className="card-text mb-2">
                                            <span className="fw-bold" style={{ color: '#20EA34' }}>Price:</span>{" "}
                                            <span style={{ color: '#000000' }}>{product.price_range}</span>
                                        </p>
                                        <button
                                            onClick={() => navigate('/features', { state: { product, img_url } })}
                                            className="btn mt-auto fw-semibold btn-view"
                                            style={{
                                                color: '#20EA34',
                                                backgroundColor: '#000000',
                                                border: 'none'
                                            }}
                                        >
                                            View Features
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <hr className="my-5" />

        </div>
    );
};

export default Homephm;
