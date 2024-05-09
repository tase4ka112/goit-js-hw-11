import { searchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarcup } from './js/render-functions';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const searchForm = document.querySelector('#search-form');
const galleryList = document.querySelector('#gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const value = event.target.elements.searchInput.value.trim();

  if (!value) {
    return;
  }
  galleryList.innerHTML = '';
  searchImages(value)
    .then(data => {
      if (!data.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createMarcup(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });
});
