import {getData} from './api.js';
import {showAlert} from './utility.js';

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
}; //Добавление фотографий на главную станицу сайта

getData(addingPhoto, showAlert('Не удалось получить данные'));

export {addingPhoto};
