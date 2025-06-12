import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

const API_KEY = '50804443-2b846a940781baef8affcab62';
const BASE_URL = 'https://pixabay.com/api/';

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();
  if (!query) return;

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    const images = response.data.hits;

    if (images.length === 0) {
      iziToast.warning({
        title: 'Oops!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      const markup = images
        .map(
          ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a class="gallery__item" href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p><b>Likes:</b> ${likes}</p>
              <p><b>Views:</b> ${views}</p>
              <p><b>Comments:</b> ${comments}</p>
              <p><b>Downloads:</b> ${downloads}</p>
            </div>
          </div>
        </a>`
        )
        .join('');
      gallery.innerHTML = markup;
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    loader.classList.add('hidden');
  }
});