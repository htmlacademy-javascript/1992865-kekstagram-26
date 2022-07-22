import {photos} from './data-creation.js';

const pictures = document.querySelectorAll ('.picture');
const body = document.body;
const bigPictureElement = document.querySelector ('.big-picture');
const buttonBigPictureCancel = bigPictureElement.querySelector ('.big-picture__cancel');

const addingPhotoComments = (index) => {
  const socialComments = bigPictureElement.querySelector('.social__comments');
  const socialComment = bigPictureElement.querySelector('.social__comment');
  socialComments.innerHTML = '';
  const similarListFragment = document.createDocumentFragment();
  photos[index].comments.forEach(({avatar, name, message}) => {
    const photosCommentsClone = socialComment.cloneNode(true);
    const socialPictureElementClone = photosCommentsClone.querySelector('.social__picture');
    socialPictureElementClone.src = avatar;
    socialPictureElementClone.alt = name;
    photosCommentsClone.querySelector('.social__text').textContent = message;
    similarListFragment.append(photosCommentsClone);
    socialComments.append(similarListFragment);
  });
};

const onBigPictureEscKeydown = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (picture, photogphiess) => {
  picture.forEach ((element, index) => {
    element.addEventListener('click', () => {
      bigPictureElement.classList.remove('hidden');
      body.classList.add('modal-open');
      bigPictureElement.querySelector('.big-picture__img img').src = photogphiess[index].url;
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
