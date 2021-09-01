/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';
import '../App.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const {
      isLoginLoading,
      hasLoginError,
      login,
      isLogged,
    } = useUser();

    useEffect(() => {
      if (isLogged) history.push('/');
    }, [isLogged, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };

    return (
      <>
        <div className="container">
          <h2>Login</h2>
          {isLoginLoading && <strong>Checking credentials...</strong>}
          {!isLoginLoading
          && (
          <form onSubmit={handleSubmit}>
            <label>
              email
              <input
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>

            <label>
              password
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>

            <button type="submit">Login</button>
          </form>
          )}
          {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
        </div>
      </>
    );
}
