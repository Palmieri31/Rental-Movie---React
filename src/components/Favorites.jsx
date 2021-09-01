import React, { useEffect } from 'react';
import useUser from '../hooks/useUser';
import FavList from './FavList';
import '../App.css';

export default function Favorites() {
    const { getFav, favs } = useUser();

    useEffect(() => {
        getFav();
    }, []);

    return (
      <div className="container">
        { (!favs.length) ? (
          <h3>no Movies found</h3>
            ) : (
                favs.map((fav) => <FavList key={fav.id} fav={fav} />)
            )}
      </div>
    );
}
