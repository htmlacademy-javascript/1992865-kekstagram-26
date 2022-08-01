import './image-scale.js';
import './image-effects.js';

import {openModal} from './utility.js';
import {representationInitialScale, scalingImage} from './image-scale.js';
import {showAlertSendingData} from './alert-forms.js';
import {defaultFilter} from './image-effects.js';
import {sendData} from './api.js';

const MAXIMUM_HASHTAGS = 5;

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
}, false);
const file = form.querySelector ('.img-upload__input');
const imgUploadWindow = form.querySelector ('.img-upload__overlay');
const buttonCloseUploadOverley = form.querySelector('.img-upload__cancel');
const fieldsetUploadText = form.querySelector('.img-upload__text');
const inputTextHashtag = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('.img-upload__submit');

const splitTextHashtag = () => inputTextHashtag.value.toLowerCase().split(' '); //Чтение хештегов в массив, преобразование в нижний регистр, отделение от друг друга пробелом

fieldsetUploadText.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
}); //При фокусе на вводе хештега или комментария Escape не срабатывает

const onUploadOverlayKeyKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadOverlay();
  }
}; //Закрытие окна загрузки фотографии по нажатию Escape

const openUploadOverlay = () => {
  imgUploadWindow.classList.remove('hidden');
  openModal();
  scalingImage();
  defaultFilter();

  document.addEventListener ('keydown', onUploadOverlayKeyKeydown);
};

function closeUploadOverlay () {
  imgUploadWindow.classList.add('hidden');
  openModal();
  form.reset();
  representationInitialScale();

  document.removeEventListener('keydown', onUploadOverlayKeyKeydown);
}

file.addEventListener('change', () => {
  openUploadOverlay();
});

buttonCloseUploadOverley.addEventListener('click', () => {
  closeUploadOverlay ();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
}; //Блокировать кнопку отправить

const unblockSubmitButton =() => {
  submitButton.disabled = false;
}; //Разблокировать кнопку отправить

pristine.addValidator(inputTextHashtag, () => splitTextHashtag().length <= MAXIMUM_HASHTAGS, 'Не больше 5 хештегов');
pristine.addValidator(inputTextHashtag, () => {
  const uniqueTextHashtagSplit = new Set(splitTextHashtag());
  return uniqueTextHashtagSplit.size === splitTextHashtag().length;
}, 'Не может быть одинаковых тегов');
pristine.addValidator(inputTextHashtag, () => inputTextHashtag.value === '' || splitTextHashtag().every((value) => value.length >= 2 && value.length <= 20), 'Хештег содержит не более 20 знаков включительно');
pristine.addValidator(inputTextHashtag, () => inputTextHashtag.value === '' || splitTextHashtag().every((value) => /^#[A-Za-zА-Яа-яЁё0-9]{0,}$/.test(value)), 'Хештег начинается с # состоит из букв и чисел и сод');


const setUserFormSubmit = (onSucces) => {
  form.addEventListener ('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(() => {
        onSucces();
        unblockSubmitButton();
        showAlertSendingData('#success');
      },
      () => {
        showAlertSendingData('#error');
        unblockSubmitButton();
      }
      , new FormData(evt.target)
      );
    }
  });
};

setUserFormSubmit(closeUploadOverlay);

export {setUserFormSubmit, openUploadOverlay, closeUploadOverlay};
