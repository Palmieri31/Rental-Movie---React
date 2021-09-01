/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function DeleteFav({ id }) {
    const { deleteFav, isLogged } = useUser();
    const history = useHistory();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isLogged) return history.push('/auth');
  }, []);

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
