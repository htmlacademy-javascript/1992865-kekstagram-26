const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};  //Возвращает рандомное число в положительном диапазоне

const getRandomArrayElement = (element) => element [getRandomPositiveInteger (0, element.length - 1)];  //Выбирает из массива рандомный элемент

const checkCommentLenght = (string, length) => string.length <= length;    //сравнивает строку с максимальным колличеством символов

const openModal = () => {
  const body = document.body;
  if (!body.classList.contains('modal-open')) {
    body.classList.add('modal-open');
  } else {
    body.classList.remove('modal-open');
  }
};//Добавляет или удаляет класс модалного окна на body

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zindex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.background = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {getRandomPositiveInteger, getRandomArrayElement, checkCommentLenght,openModal, showAlert};
