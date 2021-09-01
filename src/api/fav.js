/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import { API_HOST } from '../utils/constant';

export async function addFavAPI({ id, jwt }) {
  const url = `${API_HOST}/api/favorites/${id}`;

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${jwt}`,
    },
    body: JSON.stringify({ id }),
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else if (response.status === 403) {
        return { message: 'Require User role' };
      } else if (response.status === 500) {
        return { message: 'the movie is already favorites' };
      }
    })
    .then((result) => {
      const { message } = result;
      return message;
    })
    .catch((err) => err);
}

export async function getFavAPI({ jwt }) {
  const url = `${API_HOST}/api/favorites`;

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${jwt}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: 'the movie is already favorites' };
    })
    .then((result) => result)
    .catch((err) => err);
}

export async function deleteFavAPI({ id, jwt }) {
  const url = `${API_HOST}/api/favorites/${id}`;

  const params = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${jwt}`,
    },
    body: JSON.stringify({ id }),
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: 'the movie is already favorites' };
    })
    .then((result) => {
      const { message } = result;
      return message;
    })
    .catch((err) => err);
}
