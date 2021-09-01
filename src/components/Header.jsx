/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import useUser from '../hooks/useUser';
import '../App.css';

export default function Header() {
    const { isLogged, logout, jwt } = useUser();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/');
        logout();
    };

    return (
      <header>
        <Link to="/"> Home </Link>
        {(() => {
          if (isLogged) {
              const user = jwt_decode(jwt);
              if (user.rol === 2) {
              return (
                <>
                  <Link to="/" onClick={handleClick}> Logout </Link>
                  <Link to="/favorites">Favorites</Link>
                </>
                );
              } else if (user.rol === 1) {
                return (
                  <>
                    <Link to="/" onClick={handleClick}> Logout </Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/editmovie">Edit Movie</Link>
                    <Link to="/addmovie">Add Movie</Link>
                  </>
                );
              }
            } else {
              return (
                <Link to="/auth">Login</Link>
              );
            }
          })()}
      </header>
    );
}
