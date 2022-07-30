import {openModal} from './utility.js';

const bigPictureElement = document.querySelector ('.big-picture');
const buttonBigPictureCancel = bigPictureElement.querySelector ('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count span');
const buttonCommentsLoader = document.querySelector('.comments-loader');
const socialComments = bigPictureElement.querySelector('.social__comments');
const socialComment = bigPictureElement.querySelector('.social__comment');
const maximumOutputComments = 5;

const calculatesDisplayedComments = (listPhoto, index, commentCount, listFragment) => {
  let countSlice = 0;
  if (listPhoto[index].comments.length <= maximumOutputComments || listPhoto[index].comments.length < commentCount + maximumOutputComments) {
    socialCommentCount.textContent = `${listPhoto[index].comments.length}`;
    buttonCommentsLoader.classList.add('hidden');
    countSlice = commentCount + maximumOutputComments;
    commentCount = 0;
  } else {
    commentCount += maximumOutputComments;
    countSlice = commentCount;
    socialCommentCount.textContent = `${commentCount}`;
  }
  listPhoto[index].comments.slice(countSlice - maximumOutputComments, countSlice).forEach(({avatar, name, message}) => {
    const photosCommentsClone = socialComment.cloneNode(true);
    const socialPictureElementClone = photosCommentsClone.querySelector('.social__picture');
    socialPictureElementClone.src = avatar;
    socialPictureElementClone.alt = name;
    photosCommentsClone.querySelector('.social__text').textContent = message;
    listFragment.append(photosCommentsClone);
    socialComments.append(listFragment);
  });
}; //вычесляет колличество показанных комментариев

const addingPhotoComments = (photos, index) => {
  const countComment = 0;
  socialComments.innerHTML = '';
  const similarListFragment = document.createDocumentFragment();
  calculatesDisplayedComments(photos, index, countComment, similarListFragment);
  buttonCommentsLoader.addEventListener('click', (evt) => {
    evt.preventDefault();
    calculatesDisplayedComments(photos, index, countComment, similarListFragment);
  });
}; //Добавление комментариев к фотографии

const onBigPictureEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (photos) => {
  const pictures = document.querySelectorAll ('.picture');
  pictures.forEach ((element, index) => {
    element.addEventListener('click', () => {
      bigPictureElement.classList.remove('hidden');
      openModal();
      bigPictureElement.querySelector('.big-picture__img img').src = photos[index].url;
      bigPictureElement.querySelector('.likes-count').textContent = photos[index].likes;
      bigPictureElement.querySelector('.comments-count').textContent = photos[index].comments.length;
      bigPictureElement.querySelector('.social__caption').textContent = photos[index].description;
      addingPhotoComments(photos, index);
    });
  });

  document.addEventListener('keydown', onBigPictureEscKeydown);
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  openModal();
  bigPictureElement.querySelector('.social__comment-count').classList.remove('hidden');
  bigPictureElement.querySelector('.comments-loader').classList.remove('hidden');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

buttonBigPictureCancel.addEventListener ('click', () => {
  closeBigPicture();
});

export {openBigPicture};
