const effectList = document.querySelector('.effects__list');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');

const removeAttribute = (element, attribute) => {
  element.removeAttribute(attribute);
}; //Удаление атрибута у элемента

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
  format: {
    to: function(value) {
      return value;
    },
    from: function(value) {
      return parseFloat(value);
    },
  },
}); //Создание слайдера

const defaultFilter = () => {
  removeAttribute(imgUploadPreviewElement, 'class');  //Удаление класса фильтра у картинки
  removeAttribute(imgUploadPreviewElement, 'style');  //Удаление стиля фильтра у картинки
  sliderElement.classList.add('hidden');  //деактивация слайдера
  imgUploadPreviewElement.classList.add('effects__preview--none'); //Класс без фильтров
};

effectList.addEventListener ('change', (evt) => {
  evt.preventDefault();

  if (evt.target.id !== 'effect-none') {
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValueElement.value = sliderElement.noUiSlider.get(); //Запись данных слайдера в форму
      switch (evt.target.id) {
        case 'effect-chrome':
          imgUploadPreviewElement.style.filter = `grayscale(${effectLevelValueElement.value})`;

          break;
        case 'effect-sepia':
          imgUploadPreviewElement.style.filter = `sepia(${effectLevelValueElement.value})`;

          break;
        case 'effect-marvin':
          imgUploadPreviewElement.style.filter = `invert(${effectLevelValueElement.value}%)`;

          break;
        case 'effect-phobos':
          imgUploadPreviewElement.style.filter = `blur(${effectLevelValueElement.value}px)`;

          break;
        case 'effect-heat':
          imgUploadPreviewElement.style.filter = `brightness(${effectLevelValueElement.value})`;

          break;
      }  //Приминение фильтра картинке
    });
  }
  defaultFilter();
  switch (evt.target.id) {
    case 'effect-none':
      defaultFilter();

      break;
    case 'effect-chrome':
      imgUploadPreviewElement.classList.add('effects__preview--chrome');
      sliderElement.removeAttribute('disabled');
      sliderElement.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1
      });

      break;
    case 'effect-sepia':
      imgUploadPreviewElement.classList.add('effects__preview--sepia');
      sliderElement.removeAttribute('disabled');
      sliderElement.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1
      });

      break;
    case 'effect-marvin':
      imgUploadPreviewElement.classList.add('effects__preview--marvin');
      sliderElement.removeAttribute('disabled');
      sliderElement.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1
      });

      break;
    case 'effect-phobos':
      imgUploadPreviewElement.classList.add('effects__preview--phobos');
      sliderElement.removeAttribute('disabled');
      sliderElement.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1
      });

      break;
    case 'effect-heat':
      imgUploadPreviewElement.classList.add('effects__preview--heat');
      sliderElement.removeAttribute('disabled');
      sliderElement.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1
      });
      break;
  } //Выбор фильтра
});

export {defaultFilter};
