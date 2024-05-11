import { searchImages } from './js/pixabay-api';
import { createMarcup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const galleryList = document.querySelector('#gallery');
const loaderEl = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const valueSearch = event.target.elements.searchInput.value.trim();

  if (!valueSearch) {
    iziToast.error({
      message: 'Please enter text to find something!',
      position: 'topRight',
    });
    return;
  }

  loaderEl.classList.remove('is-hidden');

  searchImages(valueSearch)
    .then(images => {
      if (!images.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      searchForm.searchInput.value = '';
      galleryList.innerHTML = '';
      createMarcup(images.hits, galleryList);
      loaderEl.style.display = 'none';
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
        messageColor: '#ffffff',
        timeout: 3000,
        backgroundColor: '#ef4040',
      });
      loaderEl.classList.add('is-hidden');
    });
});
