/*
Отправка данных на сервер
3.1. После заполнения всех данных, при нажатии на кнопку «Отправить», все данные из формы, включая изображения, с помощью AJAX-запроса отправляются на сервер https://26.javascript.pages.academy/kekstagram методом POST с типом multipart/form-data. На время выполнения запроса к серверу кнопка «Отправить» блокируется.

3.2. Страница реагирует на неправильно введённые значения в форму. Если данные, введённые в форму, не соответствуют ограничениям, указанным в пунктах 2.3 и 2.4, форму невозможно отправить на сервер. При попытке отправить форму с неправильными данными, отправки не происходит, а пользователю показываются ошибки для неверно заполненных полей (для проверки данных используется сторонняя библиотека Pristine).
Просмотр загруженных изображений

3.3 При успешной отправке формы форма редактирования изображения закрывается, все данные, введённые в форму, и контрол фильтра приходят в исходное состояние:

- масштаб возвращается к 100%; ++
- эффект сбрасывается на «Оригинал»; ++
- поля для ввода хэш-тегов и комментария очищаются; ++
- поле загрузки фотографии, стилизованное под букву «О» в логотипе, очищается.
3.4. Если отправка данных прошла успешно, показывается соответствующее сообщение. Разметку сообщения, которая находится в блоке #success внутри шаблона template, нужно разместить перед закрывающим тегом </body>. Сообщение должно исчезать после нажатия на кнопку .success__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.

3.5. Если при отправке данных произошла ошибка запроса, нужно показать соответствующее сообщение. Разметку сообщения, которая находится в блоке #error внутри шаблона template, нужно разместить перед закрывающим тегом </body>. Сообщение должно исчезать после нажатия на кнопки .error__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением. В таком случае вся введённая пользователем информация сохраняется, чтобы у него была возможность отправить форму повторно.

3.6. Нажатие на кнопку #upload-cancel приводит к закрытию формы и возвращению всех данных и контрола фильтра к исходному состоянию (описано в пункте 3.3). Поле загрузки фотографии, стилизованное под букву «О» в логотипе, очищается.

4.1. Загрузка изображений от других пользователей производится сразу после открытия страницы с удалённого сервера: https://26.javascript.pages.academy/kekstagram/data. ++

4.2. Если при загрузке данных с сервера произошла ошибка запроса, нужно показать соответствующее сообщение. Дизайн блока с сообщением нужно придумать самостоятельно. +-

4.3. Все загруженные изображения показаны на главной странице в виде миниатюр. DOM-элемент миниатюры генерируется на основе шаблонного элемента picture, расположенного в элементе template на странице. ++

4.4. При нажатии на любую из миниатюр, показывается блок .big-picture, содержащий полноэкранное изображение с количеством лайков и комментариев. Элементу body задаётся класс modal-open. Данные, описывающие изображение, должны подставляться в соответствующие элементы в разметке.

4.5. Выход из полноэкранного режима просмотра фотографии осуществляется либо нажатием на иконку крестика .big-picture__cancel в правом верхнем углу блока .big-picture, либо нажатием на клавишу Esc. У элемента body удаляется класс modal-open. ++

4.6 Все комментарии к изображению выводятся в блок .social__comments. Сразу после открытия изображения в полноэкранном режиме отображается не более 5 комментариев. Количество показанных комментариев и общее число комментариев отображается в блоке .social__comment-count. Пример разметки списка комментариев приведён в блоке .social__comments. Комментарий оформляется отдельным элементом списка li с классом social__comment. Аватарка автора комментария отображается в блоке .social__picture. Имя автора комментария отображается в атрибуте alt его аватарки. Текст комментария выводится в блоке .social__text. +-

4.7. Отображение дополнительных комментариев происходит при нажатии на кнопку .comments-loader. При нажатии на кнопку отображается не более 5 новых комментариев. При изменении количества показанных комментариев число показанных комментариев в блоке .social__comment-count также изменяется.

4.8. Если все комментарии показаны, кнопку .comments-loader следует скрыть, добавив класс hidden.
*/

const getData = (onSucces, onFail) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) =>
      response.json()
    )
    .then((photos) => {
      onSucces(photos);
    })
    .catch(() => {
      onFail();
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