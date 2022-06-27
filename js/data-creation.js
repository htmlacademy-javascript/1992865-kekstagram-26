import {getRandomPositiveInteger, getRandomArrayElement, checkCommentLenght} from './utility.js';

const TOTAL_PHOTOS_DESCRIPTION = 25;  //Количество добавляемых фотографий
let commentsIdCount = TOTAL_PHOTOS_DESCRIPTION + 1;  //счетчик id коментариев
const comment = ''; //Строка с комментарием
const LENGTH_COMMENT = 140;  //Максимальная длинна комментария

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

const createPhotoComments = () => {
  const photosComments = {
    id: commentsIdCount++,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement (MESSAGES),
    name: getRandomArrayElement (NAMES),
  };
  return photosComments;
};  //Создание объекта комментария

const createPhotoDescription = (i) => {
  const photo = {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({ length: getRandomPositiveInteger(1, 5) }, createPhotoComments),
  };
  return photo;
}; //Создание объекта описания фотографии

// eslint-disable-next-line
const photos = Array.from ({length: TOTAL_PHOTOS_DESCRIPTION}, (v, i) => createPhotoDescription (i));  //Создание массива фотографий
// Игнор для ESLint, переменная нигде не используется

checkCommentLenght (comment, LENGTH_COMMENT);

export {photos};
