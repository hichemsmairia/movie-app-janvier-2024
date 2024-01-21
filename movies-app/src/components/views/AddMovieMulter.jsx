import React, { useState } from 'react';
import axios from 'axios';

function AddMovie() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        year: 0
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
            //e.target.value(text/number)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const movieData = new FormData();
        movieData.append('year', formData.year);
        movieData.append('title', formData.title);
        movieData.append('description', formData.description);
        movieData.append('image', formData.image);

        try {
            const response = await axios.post('http://localhost:5000/api/movies/add_movie', movieData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container col-4 mt-5">
            <h4 className='text-center'>Ajouter un film</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold fs-5 text-primary">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label fw-bold fs-5 text-primary">Year:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold fs-5 text-primary">Description:</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label fw-bold fs-5 text-primary">Image:</label>
                    <input
                        type="file"
                        className="form-control"
                        name="image"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}

export default AddMovie;
