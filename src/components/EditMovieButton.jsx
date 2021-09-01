/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function EditMovieButton({ id }) {
    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: '/editmovieform',
            search: '?query=abc',
            state: { detail: id },
        });
    };

    return (
      <button type="submit" onClick={handleClick}>
        <span aria-label="Fav Gif" role="img">🔄</span>
      </button>
    );
}
