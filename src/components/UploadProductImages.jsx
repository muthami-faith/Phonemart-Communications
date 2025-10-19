import React, { useState } from 'react';
import axios from 'axios';

const UpdateProductImages = ({ productId }) => {
    const [secondImage, setSecondImage] = useState(null);
    const [thirdImage, setThirdImage] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!secondImage && !thirdImage) {
            setError("Please select at least one image to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("product_id", productId);
        if (secondImage) formData.append("secondary_photo1", secondImage);
        if (thirdImage) formData.append("secondary_photo2", thirdImage);

        try {
            const res = await axios.post("https://ninjafaith.pythonanywhere.com/api/update_product_photos", formData);
            setMessage(res.data.message);
            setError("");
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Error uploading images.");
            setMessage("");
        }
    };

    return (
        <div className="card p-3 mt-4">
            <h5>Update Additional Product Images</h5>
            {message && <p className="text-success">{message}</p>}
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Second Image (optional)</label>
                    <input type="file" accept="image/*" className="form-control" onChange={(e) => setSecondImage(e.target.files[0])} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Third Image (optional)</label>
                    <input type="file" accept="image/*" className="form-control" onChange={(e) => setThirdImage(e.target.files[0])} />
                </div>

                <button type="submit" className="btn btn-primary">Upload Images</button>
            </form>
        </div>
    );
};

export default UpdateProductImages;
