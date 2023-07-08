import axios from 'axios';
const API_KEY =
  'live_AYm3OFL5RsopcRxkS6vktyN1rahZysaNXWqUpYbk0YmAblViSMpWRz5uBAhpOooy';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common['x-api-key'] = API_KEY;

// fetchBreeds(axios.get('BASE_URL'))
// .then((res) = {
//     console.log
//         ('Sucses', res)
// })
//     .catch(err => {
//         console.log
//     ('filure', err)});

export function fetchBreeds() {
  return axios
    .get(BASE_URL)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}
