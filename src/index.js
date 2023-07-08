import { fetchBreeds } from './cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

fetchBreeds(BASE_URL)
  .then(breeds => {
    console.log('Breeds:', breeds);
  })
  .catch(error => {
    console.error('Error:', error);
  });
