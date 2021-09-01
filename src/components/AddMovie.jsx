/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import useUser from '../hooks/useUser';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { addMovie } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, image });
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

          <button type="button">Add Movie</button>
        </form>
      </div>
    </div>
  );
}
