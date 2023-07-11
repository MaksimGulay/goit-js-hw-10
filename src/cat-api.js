import axios from 'axios';

const API_KEY =
  'live_AYm3OFL5RsopcRxkS6vktyN1rahZysaNXWqUpYbk0YmAblViSMpWRz5uBAhpOooy';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds(BASE_URL) {
  return axios
    .get(BASE_URL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}
