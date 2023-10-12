const BASE_URL = 'https://substantive.pythonanywhere.com/';

function request(
  endpoint = '',
  method = 'GET',
  data = null,
) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

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