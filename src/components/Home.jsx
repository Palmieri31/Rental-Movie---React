import React, { useState, useEffect } from 'react';
import getMovies from '../api/movies';
import MovieList from './MovieList';
import '../App.css';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
        .then((movie) => setMovies(movie))
        .catch(() => setMovies([]));
    }, []);

    return (
      <div className="container">
        { (!movies.length) ? (
          <h3>no Movies found</h3>
            ) : (
                movies.map((movie) => <MovieList key={movie.id} movie={movie} />)
            )}
      </div>
    );
}
