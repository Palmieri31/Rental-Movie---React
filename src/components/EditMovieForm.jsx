/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function EditMovieForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const { ModifyMovie, isLogged } = useUser();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
      if (!isLogged) history.push('/auth');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = location.state.detail;
        ModifyMovie({ id, title, description, image });
        return history.push('/auth');
    };

    return (
      <div className="container">
        <h2>Edit Movie</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              title
              <input
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>

            <label>
              description
              <input
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </label>

            <label>
              Image
              <input
                placeholder="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>

            <button type="submit">Edit Movie</button>
          </form>
        </div>
      </div>
    );
}
