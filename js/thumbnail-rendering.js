import {photos} from './data-creation.js';

const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const similarListFragment = document.createDocumentFragment();

const addingPhoto = (photographies) => {
  photographies.forEach(({url, likes, comments}) => {
    const photographiesElement = pictureTemplate.cloneNode(true);
    photographiesElement.querySelector('.picture__img').src = url;
    photographiesElement.querySelector('.picture__likes').textContent = likes;
    photographiesElement.querySelector('.picture__comments').textContent = comments.length;
    
    similarListFragment.append(photographiesElement);
  });
};

addingPhoto(photos);
pictures.append(similarListFragment);
