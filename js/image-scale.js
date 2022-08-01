const MIN_IMAGE_SCALE = 25; //Минимальный масштаб картинки
const MAX_IMAGE_SCALE = 100; //Максимальный масштаб картинки
const ZOOM_STEP = 25; //Шаг изменения масштаба
const NUMBER_CONVERT_PERCENTAGE = 100; //Число для перевода дроби в проценты
const DEFAULT_SCALE = 100; //Начальный масштаб

const scaleElement = document.querySelector('.scale');
const scaleControlValue = scaleElement.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
let percent = 100; //Масштаб добавляемой картинки в процентах

const representationInitialScale = () => {
  scaleControlValue.value = `${DEFAULT_SCALE}%`;
  imgUploadPreview.style.transform = `scale(${DEFAULT_SCALE / NUMBER_CONVERT_PERCENTAGE})`;
  percent = 100;
}; //Установка начального масштаба

const scalingImage = () => {
  scaleControlValue.value = `${percent}%`;
  imgUploadPreview.style.transform = `scale(${percent / NUMBER_CONVERT_PERCENTAGE})`;
}; //Приминение масштабирования картинки и запись в value

scaleElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.matches('.scale__control--smaller')) {
    if(percent > MIN_IMAGE_SCALE) {
      percent -= ZOOM_STEP;
    }
  } else {
    if (evt.target.matches('.scale__control--bigger')){
      if(percent < MAX_IMAGE_SCALE) {
        percent += ZOOM_STEP;
      }
    }
  }
  scalingImage();
}); //Определение % процента масштабирования картинки

export {scalingImage, representationInitialScale, percent};
