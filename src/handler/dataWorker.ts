import { pictureJsonType } from '../model/models';
import data from '../picture.json';
const temp = [...data]

export const getTenUniqData = () => {
  // const temp = [...data];
  const gameContainer = []
  while (gameContainer.length < 10) {
    const randomnumber = Math.floor(Math.random() * temp.length)
    let removed = temp.splice(randomnumber, 1);
    gameContainer.push(...removed)
  }
  return gameContainer;
}

const createGameAuthor = () => {
  return {
    allRoundsData: [{}], // массив объектов с правильными данными
    roundAnswers: ['...'], // кнопки ответов

  }
}

const getUniqueAuthorNames = () => {
  let result = data.map(function (el) {
    return el.author
  });
  const uniqueNames = new Set(result)
  return Array.from(uniqueNames);
}

//!Тасование Фишера Йетса
function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

export const createAuthorAnswerBtns = (exception: string) => {
  const result: string[] = [];
  const uniqAuthors = getUniqueAuthorNames();
  const exeptPosition = uniqAuthors.indexOf(exception);
  const removeExteption = uniqAuthors.splice(exeptPosition, 1)
  result.push(...removeExteption)
  while (result.length < 4) {
    const randomnumber = Math.floor(Math.random() * uniqAuthors.length);
    let removed: string[] = uniqAuthors.splice(randomnumber, 1)
    result.push(...removed)
  }
  return shuffle(result);
}







