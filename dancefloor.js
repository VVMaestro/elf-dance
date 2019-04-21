// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [200, allGems[40]],
  [3000, allGems[21]],
  [200, allGems[20]],
  [200, allGems[2]],
  [200, allGems[3]],
  [200, allGems[6]],
  [200, allGems[33]],
  [2000, allGems[40]],
  [200, allGems[19]],
  [200, allGems[18]],
  [200, allGems[18]],
  [200, allGems[18]],
  [200, allGems[39]]
];

// Это ваша танцевальная группа
let elves = [{
  name: allElves[0],
  head: '(·_·)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[1]]
},
{
  name: allElves[1],
  head: '(o_o)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[14]],
  dislikedGems: [allGems[24]]
},
{
  name: allElves[2],
  head: '(o_O)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[19]],
  dislikedGems: [allGems[28]]
},
{
  name: allElves[3],
  head: '(-_-)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[21]],
  dislikedGems: [allGems[7]]
},
{
  name: allElves[4],
  head: '(._.)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[10]],
  dislikedGems: [allGems[41]]
}];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}