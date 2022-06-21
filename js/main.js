const comment = ''; //Строка с комментарием
const LENGTH_COMMENT = 140;

const getRandomPositiveInteger = (a, b) => {     //Возвращает рандомное число в положительном диапазоне
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkCommentLenght = (string, length) => string.length <= length;    //сравнивает строку с максимальным колличеством символов

getRandomPositiveInteger (100, 5);
checkCommentLenght (comment, LENGTH_COMMENT);
