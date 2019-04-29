// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [200, allGems[40]],
  [2000, allGems[21]],
  [200, allGems[20]],
  [200, allGems[2]],
  [200, allGems[6]],
  [200, allGems[21]],
  [200, allGems[20]],
  [200, allGems[2]],
  [200, allGems[6]],
  [200, allGems[21]],
  [200, allGems[20]],
  [200, allGems[2]],
  [200, allGems[6]],
  [200, allGems[23]],
  [200, allGems[33]],
  [200, allGems[19]],
  [200, allGems[18]],
  [2000, allGems[40]],
  [200, allGems[18]],
  [200, allGems[18]],
  [200, allGems[24]],
  [200, allGems[22]],
  [200, allGems[24]],
  [200, allGems[22]],
  [200, allGems[24]],
  [200, allGems[22]],
  [200, allGems[19]],
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
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[2],
    head: '(o_O)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[3],
    head: '(-_-)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[4],
    head: '(._.)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[5],
    head: '(*>*)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[6],
    head: '(^m^)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[7],
    head: ')"o"(',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[8],
    head: '|#_#|',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[9],
    head: '{+_+}',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[10],
    head: '(=_=)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[11],
    head: '(@>@)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[12],
    head: ')0.0(',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[13],
    head: '|^c^|',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[14],
    head: '(<_>)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[15],
    head: '(0^0)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  }
];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}