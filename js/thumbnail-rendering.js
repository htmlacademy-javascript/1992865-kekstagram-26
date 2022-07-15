import {photos} from './data-creation.js';

const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const addingPhoto = (photographies) => {
  const similarListFragment = document.createDocumentFragment();
  photographies.forEach(({url, likes, comments}) => {
    const photographiesElement = pictureTemplate.cloneNode(true);
    photographiesElement.querySelector('.picture__img').src = url;
    photographiesElement.querySelector('.picture__likes').textContent = likes;
    photographiesElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.append(photographiesElement);
    pictures.append(similarListFragment);
  });
};

addingPhoto(photos);
