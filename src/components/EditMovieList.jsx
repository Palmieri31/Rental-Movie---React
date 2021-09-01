/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import EditMovieButton from './EditMovieButton';
import '../App.css';

export default function EditMovieList({ movie }) {
    return (
      <div className="card">
        <div>
          <EditMovieButton id={movie.id} />
        </div>
        <h3> {movie.title} </h3>
        <img src={movie.image} alt="" width="200" height="300" />
      </div>
    );
}
