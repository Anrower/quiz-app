import { pictureJsonType } from '../model/models';
import data from '../picture.json';
// const parse: pictureJsonType[] = JSON.parse(data)
const temp: pictureJsonType[] = [...data]

export const getTenUniqData = () => {
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
  let result = temp.map(function (el) {
    return el.author
  });
  // const uniqVal: string[] = []
  // while (result.length !== 181) {
  //   const tem: any = result.pop()
  //   if (uniqVal.indexOf(tem) === -1) {
  //     uniqVal.push(tem);
  //   }
  // }
  // console.log(uniqVal)
  const uniqueNames = new Set(result)
  // console.log(result)
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
  let uniqAuthors = getUniqueAuthorNames();
  const exeptPosition = uniqAuthors.indexOf(exception);
  const removeExteption = uniqAuthors.splice(exeptPosition, 1)
  console.log(`Кого нужно убрат из массива${removeExteption}`)
  result.push(exception)

  while (result.length < 4) {
    const randomnumber = Math.floor(Math.random() * uniqAuthors.length);
    let removed: string[] = uniqAuthors.splice(randomnumber, 1)
    result.push(...removed)
  }
  return shuffle(result);
}







