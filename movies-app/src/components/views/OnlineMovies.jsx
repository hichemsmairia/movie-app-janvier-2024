import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const OnlineMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=40308fae752ed18da99b4da693b2db6e`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineMovies;
