const removesAlert = (window) => {
  window.classList.add('hidden');
  window.remove();
  if (window.classList.contains('error')) {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
  }
}; //Удаляет оповещение о удачной или не удачной отправке данных

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
}; //Сообщение о неудачной получении данных

const showAlertSendingData = (message) => {
  const alertMessageFragment = document.createDocumentFragment();
  const alertTemplate = document.querySelector (message).content;
  const alertClone = alertTemplate.cloneNode(true);
  alertMessageFragment.append(alertClone);
  document.body.append(alertMessageFragment);
  const alertSuccess = document.querySelector('.success');
  const alertSuccessButton = document.querySelector('.success__button');
  const alertError = document.querySelector('.error');
  const alertErrorButton = document.querySelector('.error__button');

  if(message === '#success') {

    document.addEventListener('keydown', (evt) => {
      evt.preventDefault();
      if(evt.key === 'Escape') {
        removesAlert(alertSuccess);
      }
    }); //Обработчик закрывает нажатием Escape окно с ошибкой

    alertSuccess.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(evt.target === alertSuccess || evt.target === alertSuccessButton) {
        removesAlert(alertSuccess);
      }
    }); //Обработчик закрывает по кнопке или на свободном поле от сообщения окно с удачной отправкой данных

  } else if (message === '#error') {
    const imgUploadOverlay = document.querySelector('.img-upload__overlay');
    imgUploadOverlay.classList.add('hidden');

    document.addEventListener('keydown', (evt) => {
      evt.preventDefault();
      if(evt.key === 'Escape') {
        removesAlert(alertError);
      }
    }); //Обработчик закрывает нажатием Escape окно с ошибкой

    alertError.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(evt.target === alertError || evt.target === alertErrorButton) {
        removesAlert(alertError);
      }
    }); //Обработчик закрывает по кнопке или на свободном поле от сообщения окно с ошибкой
  }
}; //вывод сообщения о успешном или неудачной отправке фото

export {showAlert, showAlertSendingData};
