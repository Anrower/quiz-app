import { pictureJsonType } from '../model/models';
import data from '../picture.json';

export const getAuthorsNames = () => {
  const getUniqueAuthorNames = (json: pictureJsonType[]) => {
    let result = json.map(function (el) {
      return el.author
    });
    const uniqueNames = new Set(result)
    return Array.from(uniqueNames);
  }
  return getUniqueAuthorNames(data);
}

export const getYear = () => {
  const getUniqueYear = (json: pictureJsonType[]) => {
    let result = json.map(function (el) {
      return el.year
    });
    const uniqueNames = new Set(result)
    return Array.from(uniqueNames);
  }
  return getUniqueYear(data);
}

export const getRandomData = () => {
  const dataTransform = (json: pictureJsonType[]) => {
    const max = data.length;
    const randomValue = Math.floor(Math.random() * max)
    return json[randomValue];
  }
  return dataTransform(data)
}

export const getRandomAuthor = () => {
  const getRandomAuthorName = (obj: pictureJsonType) => {
    return obj.author
  }
  return getRandomAuthorName(getRandomData())
}

export const get4UniqAuthor = () => {

  const createUniqAuthorArr = (authors: string[]) => {
    let copy = [...authors]
    let arr = []
    while (arr.length < 4) {
      const randomnumber = Math.floor(Math.random() * copy.length)
      let removed = copy.splice(randomnumber, 1);
      arr.push(...removed)
    }
    return arr;
  }
  return createUniqAuthorArr(getAuthorsNames())
}

export const get4UniqYear = () => {

  const createUniqYearArr = (year: string[]) => {
    let copy = [...year]
    let arr = []
    while (arr.length < 4) {
      const randomnumber = Math.floor(Math.random() * copy.length)
      let removed = copy.splice(randomnumber, 1);
      arr.push(...removed)
    }
    return arr;
  }
  return createUniqYearArr(getYear())
}

// const readyArray = [45, 12, 54, 23];
// readyArray.splice(4, 0, 60); // first argument it's index place
// readyArray

export const getfilterByAuthorName = (author: string) => {
  const filterByAuthorName = (author: string, data: pictureJsonType[]) => {
    let result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].author === author) {
        result.push(data[i])
      };
    }
    return result
  }
  return filterByAuthorName(author, data)
}

export const getfilterByYear = (year: string) => {
  const filterByYear = (year: string, data: pictureJsonType[]) => {
    let result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].year === year) {
        result.push(data[i])
      };
    }
    return result
  }
  return filterByYear(year, data)
}




