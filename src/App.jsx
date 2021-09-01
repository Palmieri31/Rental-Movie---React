/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Addmovie from './components/AddMovie';
import Login from './components/Login';
import EditMovie from './components/EditMovie';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import { UserContextProvider } from './context/userContext';
import EditMovieForm from './components/EditMovieForm';

export default function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home />}
          />

          <Route
            exact
            path="/auth"
            component={() => <Login />}
          />

          <Route
            exact
            path="/editmovie"
            component={() => <EditMovie />}
          />

          <Route
            exact
            path="/favorites"
            component={() => <Favorites />}
          />

          <Route
            exact
            path="/addmovie"
            component={() => <Addmovie />}
          />

          <Route
            exact
            path="/editmovieform"
            component={() => <EditMovieForm />}
          />

          <Route
            exact
            path="/*"
            component={() => <ErrorPage />}
          />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}
