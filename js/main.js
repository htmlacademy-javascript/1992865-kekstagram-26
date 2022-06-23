const comment = ''; //Строка с комментарием
const LENGTH_COMMENT = 140;
const TOTAL_PHOTOS_DESCRIPTION = 25;
let commentsIdCount = TOTAL_PHOTOS_DESCRIPTION + 1;
const DESCRIPTIONS = [
  'Удачное фото',
  'Просто прогулка',
  'Красивый вид',
  'Картина маслом',
  'Произведение искуства',
  'Пейзаж'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Игорь',
  'Влас',
  'Еремей',
  'Алишер',
  'Роман',
  'Арсений'
];

const getRandomPositiveInteger = (a, b) => {     //Возвращает рандомное число в положительном диапазоне
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (element) => element [getRandomPositiveInteger (0, element.length - 1)];  //Выбирает из массива рандомный элемент

const checkCommentLenght = (string, length) => string.length <= length;    //сравнивает строку с максимальным колличеством символов

const createPhotoDescription = (i) => {
  const photo = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({ length: getRandomPositiveInteger(1, 5) }, createPhotoComments),
    }
  return photo;
};  //Создание объекта описания фотографии

const createPhotoComments = () => {
  const photosComments = {
    id: commentsIdCount++,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement (MESSAGES),
    name: getRandomArrayElement (NAMES),
  };
  return photosComments;
};  //Создание объекта комментария

let photos = Array.from ({length: TOTAL_PHOTOS_DESCRIPTION}, (v, i) => createPhotoDescription (i));  //Создание массива фотографий
console.log (photos);
getRandomPositiveInteger (100, 5);
checkCommentLenght (comment, LENGTH_COMMENT);
