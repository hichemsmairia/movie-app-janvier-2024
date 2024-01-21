import { useEffect, useState } from "react";
import axios from "axios";
import MovieElement from "./MovieElement";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get("http://localhost:5000/api/movies/get_all");
      setMovies(response.data);
    }

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="align-items-center justify-content-center mt-4">
        <h2 className="mb-4 text-bg-info text-center col-4 offset-4">Liste des films</h2>
      </div>
      <div className="row">
        {movies.map((movie) => (
          <MovieElement movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;


