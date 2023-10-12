const BASE_URL = 'https://substantive.pythonanywhere.com/';

function request(
  endpoint = '',
) {

  return fetch(BASE_URL + endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: () => request(),
};