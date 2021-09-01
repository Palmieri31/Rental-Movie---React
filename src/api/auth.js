import { API_HOST } from '../utils/constant';

export default async function signInApi({ email, password }) {
  const url = `${API_HOST}/api/login`;

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: 'Usuario o contraseña incorrectos' };
    })
    .then((result) => {
      const { token } = result;
      return token;
    })
    .catch((err) => err);
}
