const getRandomPositiveInteger = (minimumNumber, maximumNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(minimumNumber), Math.abs(maximumNumber)));
  const upper = Math.floor(Math.max(Math.abs(minimumNumber), Math.abs(maximumNumber)));
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

const showAlertSendingData = (message) => {
  const alertMessageFragment = document.createDocumentFragment();
  const alertTemplate = document.querySelector (message).content;
  const alertClone = alertTemplate.cloneNode(true);
  alertMessageFragment.append(alertClone);
  document.body.append(alertMessageFragment);
};

export {getRandomPositiveInteger, getRandomArrayElement, checkCommentLenght,openModal, showAlert, showAlertSendingData};
