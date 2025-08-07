import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel2 from "./Carousel2";
import './Header.css'; // Make sure glow and card styles are in here

const Accessories = () => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [acc, setAcc] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const img_url = "https://ninjafaith.pythonanywhere.com/static/images/";

    const getproducts = async () => {
        setLoading("Please wait...");
        try {
            const response = await axios.get("https://ninjafaith.pythonanywhere.com/api/fetch_acc_details");
            setAcc(response.data);
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

    const filtered_products = acc.filter((item) =>
        item.acc_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container-fluid">
            {loading && <div className="alert alert-info text-center">{loading}</div>}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            <div className="d-flex justify-content mb-2 mt-2 row">
                <div className="col-md-6">
                    <h3 className="text-start product-name mb-2" style={{ color: '#000000' }}>
                    <b >🧩 Mobile Accessories Collection</b>
                    </h3>
                </div>
                <div className="col-md-6">
                    <input
                    type="search"
                    className="form-control w-100"
                    placeholder="Search accessories..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        border: '2px solid #20EA34',
                        borderRadius: '8px',
                        padding: '10px',
                        backgroundColor: 'white'
                    }}
                />
                </div>
                
            </div>
             <marquee behavior="scroll" direction="left" className="text-dark product-name fw-semibold fs-6">
                <i className="product-name">Upgrade your Mobile Lifestyle today</i>
            </marquee>

            
            <hr />

            <div className="row">
                {filtered_products.map((acc) => (
                    <div key={acc.id} className="col-6 col-md-3 mb-4 d-flex justify-content-center">
                        <div className="card h-100  product-name border-1 custom-card" 
                        style={{
                            width: '100%',
                            maxWidth: '260px',
                            height: '100%',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px #20EA34',
                            transition: 'transform 0.2s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <img
                                src={img_url + acc.acc_photo}
                                alt={acc.acc_name}
                                className="card-img-top p-3 rounded"
                                style={{
                                    height: '220px',
                                    objectFit: 'contain'
                                }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title fw-bold" style={{ color: '#000000' }}>
                                    {acc.acc_name}
                                </h6>
                                <p className="card-text text-muted small fst-italic">
                                    {acc.acc_brand.slice(0, 60)}...
                                </p>
                                <p className="card-text mb-2">
                                    <span className="fw-bold" style={{ color: '#20EA34' }}>Price:</span>{" "}
                                    <span style={{ color: '#000000' }}>Ksh {acc.acc_cost}</span>
                                </p>
                                <button
                                    onClick={() =>
                                        navigate('/features2', { state: { acc, img_url } })
                                    }
                                    className="btn mt-auto fw-semibold btn-view"
                                >
                                    View Features
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="my-5" />
        </div>
    );
};

export default Accessories;
