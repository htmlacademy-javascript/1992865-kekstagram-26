import {photos} from './data-creation.js'

console.log(photos[0]);

const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const similarListFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length + 1;

  similarListFragment.append(photoElement);
});

pictures.append(similarListFragment);
