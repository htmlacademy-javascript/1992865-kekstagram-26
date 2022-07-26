/*Наложение эффекта на изображение:

1. По умолчанию должен быть выбран эффект« Оригинал».
2. На изображение может накладываться только один эффект. ++
3. При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту.Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome. ++
4. Интенсивность эффекта регулируется перемещением ползунка в слайдере. Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider.Уровень эффекта записывается в поле .effect-level__value. При изменении уровня интенсивности эффекта(предоставляется API слайдера), CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
 - Для эффекта« Хром»— filter: grayscale(0. .1) с шагом 0.1;
 - Для эффекта« Сепия»— filter: sepia(0. .1) с шагом 0.1;
 - Для эффекта« Марвин»— filter: invert(0. .100 % ) с шагом 1 % ;
 - Для эффекта« Фобос»— filter: blur(0. .3 px) с шагом 0.1 px;
 - Для эффекта« Зной»— filter: brightness(1. .3) с шагом 0.1;
 - Для эффекта« Оригинал» CSS - стили filter удаляются.
5. При выборе эффекта «Оригинал» слайдер скрывается. ++
6. При переключении эффектов, уровень насыщенности сбрасывается до начального значения(100 % ): слайдер, CSS-стиль изображения и значение поля должны обновляться.*/

const effectsList = document.querySelector('.effects__list');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');

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
});

sliderElement.setAttribute('disabled', true);

effectsList.addEventListener ('change', (evt) => {
  evt.preventDefault();
  if (evt.target.id != 'effect-none') {
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValueElement.value = sliderElement.noUiSlider.get();
    });
  };
  imgUploadPreviewElement.removeAttribute('class');
  imgUploadPreviewElement.removeAttribute('style');
  switch (evt.target.id) {
    case 'effect-none': 
      imgUploadPreviewElement.classList.add('effects__preview--none');
      sliderElement.setAttribute('disabled', true);
      break;
      
    case 'effect-chrome': 
      imgUploadPreviewElement.classList.add('effects__preview--chrome');
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1
      });
      let effectsPreviewChromeElement = effectsList.querySelector('.effects__preview--chrome');
      imgUploadPreviewElement.style.filter = `grayscale(${effectLevelValueElement.value})`;
      //console.log(effectsPreviewChromeElement.style.filter);
      
      break;
      
    case 'effect-sepia':
      imgUploadPreviewElement.classList.add('effects__preview--sepia');
      sliderElement.removeAttribute('disabled');
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
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1
      });
      /*let effectsPreviewHeatElement = effectsList.querySelector('.effects__preview--heat');
      effectsPreviewHeatElement.style.filter = `brightness()`;*/
      break;
  }
});

//console.log(effectsList);
