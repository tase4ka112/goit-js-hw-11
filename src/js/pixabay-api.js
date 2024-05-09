const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43794074-5ff9b3f6f51ca0335da2b7303';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;

export function searchImages(value) {
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${value}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
