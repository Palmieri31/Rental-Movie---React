/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */
import { useContext, useCallback, useState } from 'react';
import Context from '../context/userContext';
import signInApi from '../api/auth';
import { addFavAPI, getFavAPI, deleteFavAPI } from '../api/fav';
import { addMovieAPI, modifyMovieAPI } from '../api/movies';

export default function useUser() {
    const { favs, jwt, setFavs, setJWT } = useContext(Context);
    const [state, setState] = useState({ loading: false,
    error: false });

    const login = useCallback(({ email, password }) => {
        setState({ loading: true, error: false });
        signInApi({ email, password })
        .then((jwtoken) => {
            window.sessionStorage.setItem('jwt', jwtoken);
            setState({ loading: false, error: false });
            setJWT(jwtoken);
        })
        .catch(() => {
            window.sessionStorage.removeItem('jwt', jwt);
            setState({ loading: true, error: true });
        });
    }, [setJWT]);

    const addFav = useCallback((id) => {
        addFavAPI({ id, jwt })
        .then((FavMessage) => alert(FavMessage))
        .catch((err) => {
            alert(err);
        });
    }, [jwt]);

    const getFav = useCallback(() => {
        getFavAPI({ jwt })
        .then((Favs) => setFavs(Favs))
        .catch((err) => {
            alert(err);
        });
    }, [jwt, setFavs]);

    const deleteFav = useCallback((id) => {
        deleteFavAPI({ id, jwt })
        .then((Favs) => alert(Favs))
        .catch((err) => {
            alert(err);
        });
    }, [jwt]);

    const addMovie = useCallback(({ title, description, image }) => {
        addMovieAPI({ title, description, image, jwt })
        .then((FavMessage) => alert(FavMessage))
        .catch((err) => {
            alert(err);
        });
    }, [jwt]);

    const ModifyMovie = useCallback(({ id, title, description, image }) => {
        modifyMovieAPI({ id, title, description, image, jwt })
        .then((ModifyMessage) => alert(ModifyMessage))
        .catch((err) => {
            alert(err);
        });
    }, [jwt]);

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt', jwt);
        setJWT(null);
    }, [setJWT]);

    return {
        jwt,
        addFav,
        getFav,
        deleteFav,
        favs,
        addMovie,
        ModifyMovie,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
    };
}
