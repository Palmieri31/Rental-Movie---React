import React, { useEffect, useState } from 'react';
import EditMovieList from './EditMovieList';
import getMovies from '../api/movies';
import '../App.css';

export default function EditMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
        .then((movie) => setMovies(movie))
        .catch(setMovies([]));
    }, []);

    return (
      <div className="container">
        { (!movies.length) ? (
          <h3>no Movies found</h3>
            ) : (
                movies.map((movie) => <EditMovieList key={movie.id} movie={movie} />)
            )}
      </div>
    );
}
