import { pictureJsonType } from '../model/models';
import data from '../picture.json';
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

export const getTenUniqDataByStyle = (genre: string) => {
  const filtredData = temp.filter((el) => {
    return el.style === genre;
  })
  const gameContainer = [];
  while (gameContainer.length < 10) {
    const randomnumber = Math.floor(Math.random() * filtredData.length);
    let removed = filtredData.splice(randomnumber, 1);
    gameContainer.push(...removed);
  }
  return gameContainer;
}

const getUniqueAuthorNames = () => {
  let result = temp.map(function (el) {
    return el.author
  });
  const uniqueNames = new Set(result)
  return Array.from(uniqueNames);
}

const getUniqueYears = () => {
  let result = temp.map(function (el) {
    return el.year
  });
  const uniqueYear = new Set(result)
  return Array.from(uniqueYear);
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
  uniqAuthors.splice(exeptPosition, 1)
  result.push(exception)

  while (result.length < 4) {
    const randomnumber = Math.floor(Math.random() * uniqAuthors.length);
    let removed: string[] = uniqAuthors.splice(randomnumber, 1)
    result.push(...removed)
  }
  return shuffle(result);
}


const getImageByAuthor = (name: string) => {
  let result = '';
  const filtredData = temp.filter((el) => {
    return el.author === name;
  })
  if (filtredData.length > 1) {
    const randomnumber = Math.floor(Math.random() * filtredData.length);
    result = filtredData[randomnumber].imageNum;
  } else {
    result = filtredData[0].imageNum
  }
  return result
}


export const createImageAnswerBtns = (exceptionImg: string, exceptionArtist: string) => {
  const result: string[] = [];
  let uniqAuthors = getUniqueAuthorNames();
  const exeptPosition = uniqAuthors.indexOf(exceptionArtist);
  uniqAuthors.splice(exeptPosition, 1)
  result.push(exceptionImg)
  while (result.length < 4) {
    const randomnumber = Math.floor(Math.random() * uniqAuthors.length);
    let removed: string[] = uniqAuthors.splice(randomnumber, 1)
    let image = getImageByAuthor(removed[0])
    result.push(image)
  }
  return shuffle(result);
}

export const createYearAnswerBtns = (exception: string) => {
  const result: string[] = [];
  let uniqYears = getUniqueYears();
  const exeptPosition = uniqYears.indexOf(exception);
  uniqYears.splice(exeptPosition, 1)
  result.push(exception)

  while (result.length < 4) {
    const randomnumber = Math.floor(Math.random() * uniqYears.length);
    let removed: string[] = uniqYears.splice(randomnumber, 1)
    result.push(...removed)
  }
  return shuffle(result);
}

export const getRusTitle = (value: string) => {
  switch (value) {
    case 'pell-mell':
      return 'Вперемешку'
    case 'year':
      return "Год"
    case 'realism':
      return "Реализм"
    case 'impressionism':
      return "Импрессионизм"
    case 'symbolism':
      return "Символизм"
    case 'romanticism':
      return "Романтизм"
    case 'baroque':
      return "Барокко"
    case 'rococo':
      return "Рококо"
    case 'renaissance':
      return "Возрождение"
    default:
      return 'Вперемешку'
  }
};

export const getPageName = (value: string) => {
  switch (value) {
    case 'settingPage':
      return 'Настройки'
    case 'categoriesPage':
      return "Категории"
    default:
      return
  }
}









