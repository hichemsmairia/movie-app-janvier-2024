import { useState } from "react";
import axios from "axios";
function AddMovie() {
  const [movieData, setMovieData] = useState({
    title: "",
    year: 0,
    description: "",
    poster: "",
  })
  const [previewPoster, setPreviewPoster] = useState("")

  const handleMovieDataChange = (event) => {
    const { name, value } = event.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handlePosterChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setMovieData({ ...movieData, poster: event.target.result });
    };

    reader.readAsDataURL(file);
    setPreviewPoster(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    console.log(movieData)
    event.preventDefault();
    axios.post("http://localhost:5000/api/movies/add_movie", movieData);
  };

  return (
    <div className="card col-6 offset-3 mt-5">
      <div className="card-header bg-dark text-white">Ajouter film</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titre:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={handleMovieDataChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Annee:</label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              onChange={handleMovieDataChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              onChange={handleMovieDataChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="poster">Image Poster:</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="poster"
              accept="image/*"
              onChange={handlePosterChange}
              required
            />
            {previewPoster && (
              <div className="mt-2">
                <img
                  src={previewPoster}
                  alt="Movie poster preview"
                  height="200"
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Ajouter le film
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
