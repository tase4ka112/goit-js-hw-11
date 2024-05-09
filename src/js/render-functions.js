const galleryList = document.querySelector('#gallery');

export function createMarcup(data) {
  const marcup = data
    .map(element => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = element;
      return ` <li>
        <a href="">
    <img src="${webformatURL}" alt="${tags}">
          <ul>
            <li>Likes ${likes}</li>
            <li>Views ${views}</li>
            <li>Coments ${comments}</li>
            <li>Download ${downloads}</li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', marcup);
  console.log(data);
}
