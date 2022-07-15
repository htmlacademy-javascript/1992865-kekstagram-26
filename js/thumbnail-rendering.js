import {photos} from './data-creation.js';

const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const similarListFragment = document.createDocumentFragment();

const addingPhoto = (photos) => {
  photos.forEach(({url, likes, comments}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
  
    similarListFragment.append(photoElement);
  });
};

addingPhoto(photos);
pictures.append(similarListFragment);
