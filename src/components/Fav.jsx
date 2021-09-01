/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function Fav({ id }) {
    const { isLogged, addFav } = useUser();
    const history = useHistory();

    const handleClick = () => {
        if (!isLogged) return history.push('/auth');
        addFav(id);
    };

    return (
      <button type="submit" onClick={handleClick}>
        <span aria-label="Fav Gif" role="img">🧡</span>
      </button>
    );
}
