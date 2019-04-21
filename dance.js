let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранаты', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];


// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

function leftHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[1] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[1] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegOut(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[2] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegOut(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[3] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegIn(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[2] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegIn(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[3] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function onFavouriteGem(elf) {
  return new Promise((resolve) => {
    elf.stance[0] = 1;
    elf.stance[1] = 1;
    resolve(elf);
  });
}

function onDislikedGems(elf) {
  return new Promise((resolve) => {
    elf.stance[0] = 0;
    elf.stance[1] = 0;
    resolve(elf);
  });
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem, elvesPromises) {  
  //Эта функция определяет какой из эльфов соответствует ожидаемому состоянию
  function getRightElf (elves, expectStance) {
    let rightElf;
    elves.forEach((itElf) => {
      if (itElf.stance.toString() == expectStance.toString()) {
        rightElf = itElf;
      }
    });
    return rightElf;
  };

  const gemToDance = {
    'Цитрин'    : function(elf) {
      return Promise.all([leftHandUp(elf), rightHandUp(elf)]).then((elves) => {
        let rightElf = getRightElf(elves, [1, 1, elf.stance[2], elf.stance[3]]);

        return Promise.all([leftHandDown(rightElf), rightHandDown(rightElf)]).then((elves) => {
          let rightElf = getRightElf(elves, [0, 0, elf.stance[2], elf.stance[3]]);

          return Promise.all([leftHandUp(rightElf), rightHandUp(rightElf)]).then((elves) => {
            let rightElf = getRightElf(elves, [1, 1, elf.stance[2], elf.stance[3]]);

            return Promise.all([leftHandDown(rightElf), rightHandDown(rightElf)]).then((elves) => {              
              return getRightElf(elves, [0, 0, elf.stance[2], elf.stance[3]]);
            });
          });
        });
      });
    },
    'Аметист'   : function (elf) {
      return leftHandUp(elf)
        .then(rightHandUp)
        .then(leftHandDown)
        .then(rightHandDown);
    },
    'Кварц'     : function (elf) {
      return Promise.all([leftLegIn(elf), rightLegIn(elf)]).then((elves) => {
        let rightElf = getRightElf(elves, [elf.stance[0], elf.stance[1], 1, 1]);

        return Promise.all([leftLegOut(rightElf), rightLegOut(rightElf)]).then((elves) => {
          return getRightElf(elves, [elf.stance[0], elf.stance[1], 0, 0]);
        });
      });
    },
    'Альмандин' : function (elf) {
      return Promise.all([leftHandUp(elf), leftLegOut(elf)]).then((elves) => {
        return getRightElf(elves, [1, elf.stance[1], 0, elf.stance[3]]);
      });
    },
    'Родолит'   : function (elf) {
      return Promise.all([rightHandUp(elf), rightLegOut(elf)]).then((elves) => {
        return getRightElf(elves, [elf.stance[0], 1, elf.stance[2], 0]);
      });
    },
    'Эвклаз'    : function (elf) {
      return Promise.all([leftHandDown(elf), rightHandDown(elf)]).then((elves) => {
        return getRightElf(elves, [0, 0, elf.stance[2], elf.stance[3]]);
      });
    },
    'Тааффеит': function (elf) {
      return Promise.all([leftLegIn(elf), rightLegIn(elf)]).then((elves) => {
        return getRightElf(elves, [elf.stance[0], elf.stance[1], 1, 1]);
      });
    },
    'Пироп'     : function (elf) {
      return Promise.all([leftHandUp(elf), rightHandUp(elf), leftLegIn(elf), rightLegIn(elf)]).then((elves) => {
        let rightElf = getRightElf(elves, [1, 1, 1, 1]);

        return Promise.all([leftHandDown(elf), rightHandDown(elf), leftLegOut(rightElf), rightLegOut(rightElf)]).then((elves) => {
          return getRightElf(elves, [0, 0, 0, 0]);
        });
      });
    },
    'Спессартин': function (elf) {
      return leftLegOut(elf)
        .then(leftHandUp)
        .then(rightHandUp)
        .then(rightLegOut);
    },
    //специальные драгоценности
    'Андалузит': function (elf) {
      return new Promise((resolve) => {
        elf.stance = [0, 0, 1, 1];
        resolve(elf);
      });
    },
    'Гиацинт'  : function (elf) {
      return new Promise((resolve) => {
        elf.stance = [1, 1, 0, 0];
        resolve(elf);
      });
    },
    'Циркон'   : function (elf) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(elf);
        }, elf.danceSpeed);
      });
    },
    'Танзанит'  : function (elf) {
      return new Promise((resolve) => {
        elf.danceSpeed = elf.danceSpeed * 2;
        resolve(elf);
      });
    },
    'Топаз'    : function (elf) {
      return new Promise((resolve) => {
        elf.danceSpeed = elf.danceSpeed / 2;
        resolve(elf);
      });
    },
    'Параиба'  : function (elf) {
      return Promise.all(elvesPromises).then(() => {
        return elf;
      });

    }
  };

  function freestyle (elf) {
    const freestyles = ['Цитрин', 'Аметист', 'Кварц', 'Альмандин', 'Родолит', 'Пироп', 'Спессартин'];
    const MAX_FREESTYLE = freestyles.length - 1;
    
    return gemToDance[freestyles[randomNumber(0, MAX_FREESTYLE)]](elf);
  }

  if (elf.favouriteGems && elf.favouriteGems.includes(gem)) return onFavouriteGem(elf);
  if (elf.dislikedGems && elf.dislikedGems.includes(gem)) return onDislikedGems(elf);
  if (gem in gemToDance) return gemToDance[gem](elf);
  else return freestyle(elf);
}

// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
  return elvesPromises.map((elfPromise) => {
    return elfPromise.then(elf => {
      return displayGemToElf(elf, gem, elvesPromises);
    })
  })
}