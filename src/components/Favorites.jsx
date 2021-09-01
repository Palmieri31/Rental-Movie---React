import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';
import FavList from './FavList';
import '../App.css';

export default function Favorites() {
    const { getFav, favs, isLogged } = useUser();
    const history = useHistory();

    useEffect(() => {
        if (!isLogged) {
          history.push('/auth');
        } else {
          getFav();
        }
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
