const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const addingPhoto = (photographies) => {
  const similarListFragment = document.createDocumentFragment();
  photographies.forEach(({url, likes, comments}) => {
    const photographiesElement = pictureTemplate.cloneNode(true);
    photographiesElement.querySelector('.picture__img').src = url;
    photographiesElement.querySelector('.picture__likes').textContent = likes;
    photographiesElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.append(photographiesElement);
  });
  pictures.querySelectorAll('.picture').forEach((elem) => elem.remove());
  pictures.append(similarListFragment);
}; //Добавление фотографий на главную станицу сайта

export {addingPhoto};
