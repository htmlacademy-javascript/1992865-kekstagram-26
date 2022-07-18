/* 
1. Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением. ++

2. Для отображения окна нужно удалять класс hidden у элемента .big - picture и каждый раз заполнять его данными о конкретной фотографии:

  - Адрес изображения url подставьте как src изображения внутри блока.big - picture__img.

  - Количество лайков likes подставьте как текстовое содержание элемента.likes - count.

  - Количество комментариев comments подставьте как текстовое содержание элемента.comments - count.

  - Список комментариев под фотографией: комментарии должны вставляться в блок.social__comments.
  
  - Описание фотографии description вставьте строкой в блок.social__caption.
  
3. После открытия окна спрячьте блоки счётчика комментариев.social__comment-count и загрузки новых комментариев.comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
  
4. После открытия окна добавьте тегу < body > класс modal - open, чтобы контейнер с фотографиями позади не прокручивался при скролле.При закрытии окна не забудьте удалить этот класс. ++
  
5. Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.++
  
6. Подключите модуль в проект.++
*/

const picture = document.querySelectorAll ('.picture');
const body = document.querySelector ('body');
const bigPicture = document.querySelector ('.big-picture');
const buttonBigPictureCancel = document.querySelector ('.big-picture__cancel');

const onBigPictureEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (pictures) => {
  for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener ('click', () => {
      bigPicture.classList.remove('hidden');
      body.classList.add ('modal-open');
    });
  };
  
  document.addEventListener('keydown', onBigPictureEscKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

buttonBigPictureCancel.addEventListener ('click', () => {
  closeBigPicture();
});

openBigPicture(picture);
