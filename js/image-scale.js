const scaleElement = document.querySelector('.scale');
const inputScaleControlValue = scaleElement.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
let percent = 100;

inputScaleControlValue.value = `${percent}%`;

scaleElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.matches('.scale__control--smaller')) {
    if(percent > 25) {
      percent -= 25;
    }
  } else {
    if (evt.target.matches('.scale__control--bigger')){
      if(percent < 100) {
        percent += 25;
      }
    }
  }
  inputScaleControlValue.value = `${percent}%`;
  imgUploadPreview.style.transform = `scale(${percent / 100})`;
});
