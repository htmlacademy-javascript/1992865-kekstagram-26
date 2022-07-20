/*
1. Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением. ++

2. Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

  - Адрес изображения url подставьте как src изображения внутри блока .big-picture__img. ++

  - Количество лайков likes подставьте как текстовое содержание элемента .likes-count. ++

  - Количество комментариев comments подставьте как текстовое содержание элемента .comments-count. ++

  - Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments.

  - Описание фотографии description вставьте строкой в блок .social__caption. ++

3. После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

4. После открытия окна добавьте тегу <body> класс .modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле.При закрытии окна не забудьте удалить этот класс. ++

5. Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.++

6. Подключите модуль в проект.++
*/
import {photos} from './data-creation.js';

const pictures = document.querySelectorAll ('.picture');
const body = document.querySelector ('body');
const bigPictureElement = document.querySelector ('.big-picture');
const buttonBigPictureCancel = bigPictureElement.querySelector ('.big-picture__cancel');
const socialComments = bigPictureElement.querySelector('.social__comments');

const addingPhotoComments = (index) => {
  //console.log(socialComments);
  const similarListFragment = document.createDocumentFragment();
  photos[index].comments.forEach(({avatar, name, message}) => {
    const photosCommentsClone = bigPictureElement.querySelector('.social__comment').cloneNode(true);
    photosCommentsClone.querySelector('.social__picture').src = avatar;
    photosCommentsClone.querySelector('.social__picture').alt = name;
    photosCommentsClone.querySelector('.social__text').textContent = message;
    similarListFragment.append(photosCommentsClone);
    socialComments.append(similarListFragment);
  });
};

const onBigPictureEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (pictures, photogphiess) => {
  pictures.forEach ((element, index) => {
    element.addEventListener('click', () => {
      bigPictureElement.classList.remove('hidden');
      body.classList.add('modal-open');
      bigPictureElement.querySelector('.big-picture__img').querySelector('img').src = photogphiess[index].url;
      bigPictureElement.querySelector('.likes-count').textContent = photogphiess[index].likes;
      bigPictureElement.querySelector('.comments-count').textContent = photogphiess[index].comments.length;
      bigPictureElement.querySelector('.social__caption').textContent = photogphiess[index].description;
      bigPictureElement.querySelector('.social__comment-count').classList.add('hidden');
      bigPictureElement.querySelector('.comments-loader').classList.add('hidden');
      addingPhotoComments(index);
    });
  });

  document.addEventListener('keydown', onBigPictureEscKeydown);
};

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureElement.querySelector('.social__comment-count').classList.remove('hidden');
  bigPictureElement.querySelector('.comments-loader').classList.remove('hidden');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

buttonBigPictureCancel.addEventListener ('click', () => {
  closeBigPicture();
});

openBigPicture(pictures, photos);
