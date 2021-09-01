/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable object-curly-newline */
import { API_HOST } from '../utils/constant';

export default async function getMovies() {
  const url = `${API_HOST}/api/movies`;

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, params)
    .then((response) => response.json())
    .catch((err) => err);
}

export async function addMovieAPI({ title, description, image, jwt }) {
  const url = `${API_HOST}/api/movies`;

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${jwt}`,
    },
    body: JSON.stringify({ title, description, image, jwt }),
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else if (response.status === 403) {
        return { message: 'Require Admin role' };
      } else if (response.status === 500) {
        return { message: 'the movie is already favorites' };
      } else if (response.status === 422) {
        return { message: 'complete all the fields' };
      }
    })
    .then((result) => {
      const { message } = result;
      return message;
    })
    .catch((err) => err);
}

export async function modifyMovieAPI({ id, title, description, image, jwt }) {
  const url = `${API_HOST}/api/movies/${id}`;

  const params = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${jwt}`,
    },
    body: JSON.stringify({ id, title, description, image, jwt }),
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else if (response.status === 403) {
        return { message: 'Require Admin role' };
      } else if (response.status === 500) {
        return { message: 'error to modify the movie' };
      } else if (response.status === 422) {
        return { message: 'complete all the fields' };
      }
    })
    .then((result) => {
      const { message } = result;
      return message;
    })
    .catch((err) => err);
}
