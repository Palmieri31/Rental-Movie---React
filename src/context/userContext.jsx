/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    const [favs, setFavs] = useState([]);
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
    return (
      <Context.Provider value={{ favs, jwt, setFavs, setJWT }}>
        {children}
      </Context.Provider>
    );
}

export default Context;
