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

// export const getArrayData = () => {
//   const dataTransform = (json: pictureJsonType[]) => {
//     return json
//   }
//   return dataTransform(data)
// }

export const getRandomAuthor = () => {
  const getRandomAuthorName = (arr: Array<string>) => {
    const max = arr.length;
    const randomValue = Math.floor(Math.random() * max)
    return arr[randomValue];
  }
  return getRandomAuthorName(getAuthorsNames())
}

export const getfilterByAuthorName = () => {
  const filterByAuthorName = (author: string, data: pictureJsonType[]) => {
    let result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].author === author) {
        result.push(data[i])
      };
    }
    return result
  }
  return filterByAuthorName(getRandomAuthor(), data)
}

export const getAllPictureByAuthor = () => {

}



