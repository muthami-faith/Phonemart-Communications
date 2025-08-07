import { useState } from "react";
import React from "react";
import axios from "axios";

const Addphone = () => {
    const [product_name, setProductName] = useState("");
    const [product_description, setProductdescription] = useState("");
    const [product_cost, setProduct_cost] = useState(""); // You may remove this if each storage has its own price
    const [product_photo, setProduct_photo] = useState("");
    const [features, setFeatures] = useState("");
    const [storages, setStorages] = useState([{ size: '', price: '' }]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleStorageChange = (index, field, value) => {
        const updated = [...storages];
        updated[index][field] = value;
        setStorages(updated);
    };

    const addStorageField = () => {
        setStorages([...storages, { size: '', price: '' }]);
    };

    const removeStorageField = (index) => {
        const updated = [...storages];
        updated.splice(index, 1);
        setStorages(updated);
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoading("Please wait...");
        setError("");
        setSuccess("");

        try {
            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_description", product_description);
            data.append("features", features);
            data.append("product_photo", product_photo);
            data.append("storages", JSON.stringify(storages)); // send as JSON

            const response = await axios.post("https://ninjafaith.pythonanywhere.com/api/add_product", data);

            setLoading("");
            setSuccess(response.data.message);

            // Clear form
            setProductName("");
            setProductdescription("");
            setFeatures("");
            setProduct_photo("");
            setStorages([{ size: '', price: '' }]);
        } catch (error) {
            setLoading("");
            if (error.response) {
                console.log("Server error response:", error.response);
                setError(error.response.data.message || "Server error");
            } else if (error.request) {
                console.log("No response:", error.request);
                setError("No response from server");
            } else {
                console.log("Error setting up request:", error.message);
                setError(error.message);
            }
        }
    };

    return (
        <div className="row justify-content-center mt-4 mb-4">
            <div className="card shadow col-md-6 text-center bg-dark p-4 text-white">
                <form onSubmit={submit}>
                    <span className="text-info">{loading}</span>
                    <span className="text-danger">{error}</span>
                    <span className="text-success">{success}</span>

                    <input
                        type="text"
                        placeholder="Phone Model"
                        className="form-control"
                        onChange={(e) => setProductName(e.target.value)}
                        required
                        value={product_name}
                    />
                    <br />

                    <input
                        placeholder="Brand"
                        className="form-control text-start"
                        onChange={(e) => setProductdescription(e.target.value)}
                        required
                        value={product_description}
                    />
                    <br/>

                    <textarea
                        placeholder="Phone Features (comma-separated)"
                        className="form-control"
                        onChange={(e) => setFeatures(e.target.value)}
                        value={features}
                    />
                    <br />

                    <label className="text-info">Storage Options:</label>
                    {storages.map((storage, index) => (
                        <div key={index} className="d-flex gap-2 mb-2">
                            <input
                                type="text"
                                placeholder="Size (e.g. 64GB)"
                                className="form-control"
                                value={storage.size}
                                onChange={(e) => handleStorageChange(index, 'size', e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                className="form-control"
                                value={storage.price}
                                onChange={(e) => handleStorageChange(index, 'price', e.target.value)}
                                required
                            />
                            {storages.length > 1 && (
                                <button type="button" className="btn btn-danger" onClick={() => removeStorageField(index)}>
                                    X
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" className="btn btn-secondary mb-3" onClick={addStorageField}>
                        + Add Storage Option
                    </button>

                    <label className="text-primary">Browse/Upload phone image</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => setProduct_photo(e.target.files[0])}
                        required
                    />
                    <br />

                    <button type="submit" className="btn btn-primary">Add phone</button>
                </form>
            </div>
        </div>
    );
};

export default Addphone;
