let comment = ''; //Строка с комментарием
const LENGTH_COMMENT = 140;
  
function returnRandomInt (min, max) {
  if (min > 0 && max > 0) {
    if (min > max) {         //меняет местами min и max если  min > max
      let variable = min;
      min = max;
      max = variable;
    }
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log ('Диапазон введен неверно'); //если диапазон с отрицательным числом
}
  
returnRandomInt (5, 7);
  
function checkCommentLenght (string, length) {    //сравнивает строку с максимальным колличеством символов
  return string.length <= length ? true : false;
}
  
checkCommentLenght (comment, LENGTH_COMMENT);
