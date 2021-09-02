/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditMovieList from './EditMovieList';
import getMovies from '../api/movies';
import useUser from '../hooks/useUser';
import '../App.css';

export default function EditMovie() {
    const [movies, setMovies] = useState([]);
    const history = useHistory();
    const { isLogged } = useUser();

    useEffect(() => {
      if (!isLogged) {
        history.push('/auth');
      } else {
        getMovies()
        .then((movie) => setMovies(movie))
        .catch(setMovies([]));
      }
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
