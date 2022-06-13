const comment = ''; //Строка с комментарием
const LENGTH_COMMENT = 140;

function returnRandomInt (min, max) {
  if (min > 0 && max > 0) {
    if (min > max) {         //меняет местами min и max если  min > max
      const variable = min;
      min = max;
      max = variable;
    }
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  // eslint-disable-next-line no-console
  console.log ('Диапазон введен неверно'); //если диапазон с отрицательным числом
}

returnRandomInt (5, 7);

function checkCommentLenght (string, length) {    //сравнивает строку с максимальным колличеством символов
  if (string.length <= length) {
    return true;
  }
  return false;
}

checkCommentLenght (comment, LENGTH_COMMENT);
