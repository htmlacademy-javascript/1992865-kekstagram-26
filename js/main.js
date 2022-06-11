function returnRandomInt (min, max) {
  if (min > 0 && max > 0) {
    if (min > max) {
      let variable = min;
      min = max;
      max = variable;
    } 
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log ('Диапазон введен неверно');
}

returnRandomInt (5, 7);