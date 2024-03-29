import {addingPhoto} from './thumbnail-rendering.js';
import {openBigPicture} from './window-big-picture.js';

const imgFilter = document.querySelector('.img-filters');
const imgFilterForm = imgFilter.querySelector('.img-filters__form');
const NUMBER_RANDOMLY_SHOWN_POTOS = 10; //Количество рфндомго показанных фотографий в фильтре "Случайные"

const compareLikes = (PhotorgaphiesA, PhotorgaphiesB) => PhotorgaphiesB.likes - PhotorgaphiesA.likes; //Параметр определяющий вывод по кол-ву лайков от большего к меньшему

const showButtonFilter = (photographies) => {
  if (imgFilterForm.querySelector('.img-filters__button--active').id === 'filter-default') {
    addingPhoto(photographies);
    openBigPicture(photographies);
  } //Первый вывод фотографий, полученных с сервера
  imgFilter.classList.remove('img-filters--inactive');
  imgFilterForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    let reservPhotosList = photographies.slice();
    const buttonImgFilterActive = imgFilterForm.querySelector('.img-filters__button--active');
    buttonImgFilterActive.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    switch (evt.target.id) {
      case 'filter-default':
        addingPhoto(reservPhotosList);
        break; //Вывод фотографий с фильтром "По умолчананию"

      case 'filter-random':
        reservPhotosList = photographies.slice(0, NUMBER_RANDOMLY_SHOWN_POTOS);
        addingPhoto(reservPhotosList.sort(() => 0.5 - Math.random()));
        break; //Вывод n кол во фотографий с фильтром "Случайные"

      case 'filter-discussed':
        addingPhoto(reservPhotosList.sort(compareLikes));
        break; //Вывод фотографий с фильтром "Обсуждаемые", отсортированные по кол-ву лайков
    }
    openBigPicture(reservPhotosList);
  });
};

export {showButtonFilter};
