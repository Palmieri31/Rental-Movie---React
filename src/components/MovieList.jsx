/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Fav from './Fav';
import '../App.css';

export default function MovieList({ movie }) {
    return (
      <div className="card">
        <div>
          <Fav id={movie.id} />
        </div>
        <h3> {movie.title} </h3>
        <img src={movie.image} alt="" width="200" height="300" />
      </div>
    );
}
