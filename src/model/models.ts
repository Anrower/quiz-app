export interface ISetting {
  volumeRange: string,
  volumeOff: boolean,
  gameTimerOff: boolean,
  timeAnswer: number
}

export interface Igenre {
  activeGenre: string,
}

export interface Itimer {
  timerActive: boolean
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
