/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { addMovie, isLogged } = useUser();
  const history = useHistory();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isLogged) return history.push('/auth');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, image });
    return history.push('/');
  };

  return (
    <div className="container">
      <h2>Add Movie</h2>
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

          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
}
