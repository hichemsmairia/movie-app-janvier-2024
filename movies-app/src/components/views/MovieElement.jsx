import React from 'react'

function MovieElement({ movie } ) {
    /*
    const {movie} = props
    props = {
        movie : {},
        test:true,
        age : 25
    
    }

    */
    return (
        <div className="col-md-4 mb-4" key={movie._id}>
            <div className="card bg-dark text-white">
                <img
                    className="card-img-top rounded"
                    src={`${movie.poster}`}
                    alt={movie.title}
                />
                <div className="card-body">
                    <h5 className="card-title text-light">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                    <p className="card-text">
                        <small className="text-muted">{movie.year}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieElement