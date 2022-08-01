const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

imgUploadInput.addEventListener('change', () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some( (it) => fileName.endsWith(it) );
  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
  }
});
