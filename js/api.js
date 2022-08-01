const getData = (onSucces, onFaili) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) =>
      response.json()
    )
    .then((data) => {
      onSucces(data);
    })
    .catch(() => {
      onFaili('При получении данных произошла ошибка');
    });
};

const sendData = (onSucces, onFail, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body,
  },)
    .then((response) => {
      if(response.ok) {
        onSucces();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
