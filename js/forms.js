/*
6. Напишите код для валидации формы добавления изображения. Список полей для валидации:

 - Хэш-теги:
   
 если фокус находится в поле ввода хэш - тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
 
 - Комментарий:
 комментарий не обязателен;  ++
 длина комментария не может составлять больше 140 символов; ++
 если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.

7. Реализуйте логику проверки так, чтобы, как минимум, она срабатывала при попытке отправить форму и не давала этого сделать, если форма заполнена не по правилам. При желании, реализуйте проверки сразу при вводе значения в поле.
*/

import {openModal} from './utility.js';

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
const inputTextHashtags = form.querySelector('.text__hashtags');

const textHashtagSplit = () => inputTextHashtags.value.toLowerCase().split(' ');

const onUploadOverlayKeyKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const openUploadOverlay = () => {
  imgUploadWindow.classList.remove('hidden');
  openModal();
  
  document.addEventListener ('keydown', onUploadOverlayKeyKeydown);
};

function closeUploadOverlay () {
  imgUploadWindow.classList.add('hidden');
  openModal();
  form.reset();
  
  document.removeEventListener('keydown', onUploadOverlayKeyKeydown);
}

file.addEventListener('change', () => {
  openUploadOverlay();
});
buttonCloseUploadOverley.addEventListener('click', () => {
  closeUploadOverlay ();
});

pristine.addValidator(inputTextHashtags, () => textHashtagSplit().length <= 5, 'Не больше 5 хештегов');
pristine.addValidator(inputTextHashtags, () => {
  const uniqueTextHashtagSplit = new Set(textHashtagSplit());
  return uniqueTextHashtagSplit.size == textHashtagSplit().length;
}, 'Не может быть одинаковых тегов');
pristine.addValidator(inputTextHashtags, () => textHashtagSplit().every((value) => {
  alert (value.length);
  return value.length >= 2 && value.length <= 20;
}), 'Хештег содержит не более 20 знаков включительно');
pristine.addValidator(inputTextHashtags, () => textHashtagSplit().every((value) => /^#[A-Za-zА-Яа-яЁё0-9]{0,}$/.test(value)), 'Хештег начинается с # состоит из букв и чисел и сод');

form.addEventListener ('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
