const comment = ''; //Строка с комментарием
const LENGTH_COMMENT = 140;
const totalPhotosDescription = 25;
let commentsIdCount = totalPhotosDescription + 1;
const descriptions = [
  'Удачное фото',
  'Просто прогулка',
  'Красивый вид',
  'Картина маслом',
  'Произведение искуства',
  'Пейзаж'
];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!'
];
const names = [
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

const getRandomArrayElement = (element) => {
  return element [getRandomPositiveInteger (0, element.length - 1)];
};

const checkCommentLenght = (string, length) => string.length <= length;    //сравнивает строку с максимальным колличеством символов

const createPhotosComments = () => {
  const photosComments = {
    id: commentsIdCount++,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement (messages),
    name: getRandomArrayElement (names),
    
  };
  return photosComments;
};

const createPhotoDescription = () => {
  let photos = [];
  for ( let i = 1; i <= totalPhotosDescription; i++ ) {
    photos.push( {
      id: i,
      url: `photos/${totalPhotosDescription - ( i - 1 )} .jpg`,
      description: getRandomArrayElement (descriptions),
      likes: getRandomPositiveInteger (15, 200),
      comments: Array.from ({length: getRandomPositiveInteger(1, 5)}, createPhotosComments),
    });
  }
  return photos;
};

createPhotoDescription();
getRandomPositiveInteger (100, 5);
checkCommentLenght (comment, LENGTH_COMMENT);
