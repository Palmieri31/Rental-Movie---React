/* eslint-disable react/prop-types */
import React from 'react';
import useUser from '../hooks/useUser';

export default function DeleteFav({ id }) {
    const { deleteFav } = useUser();

    const handleClick = () => {
        deleteFav(id);
        window.location.reload();
    };

    return (
      <button type="submit" onClick={handleClick}>
        <span aria-label="Fav Gif" role="img">❌</span>
      </button>
    );
}
