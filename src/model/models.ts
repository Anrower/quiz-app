export interface ISetting {
  volumeRange: string,
  volumeOff: boolean,
  showTimer: boolean,
  timeAnswerSec: number,
  timerActive: boolean,
  timerCurrentSec: number,
}

export interface Igenre {
  activeGenre: string,
}

export interface pictureJsonType {
  author: string,
  name: string,
  year: string,
  imageNum: string
}


export interface IGamge {
  author: string,
  isCorrectAnswer: boolean,
  answerBtns: string[],
  correctInfo: pictureJsonType,
  round: number,
  popUpIsOpen: boolean,
}
