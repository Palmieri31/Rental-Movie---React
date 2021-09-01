/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import DeleteFav from './DeleteFav';
import '../App.css';

export default function FavList({ fav }) {
    return (
      <div className="card">
        <div>
          <DeleteFav id={fav.id} />
        </div>
        <h3> {fav.title} </h3>
        <img src={fav.image} alt="" width="200" height="300" />
      </div>
    );
}
