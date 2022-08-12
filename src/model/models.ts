export interface ISetting {
  gameType: string,
  volumeRange: number,
  isSound: boolean,
  showTimer: boolean,
  timeAnswerSec: number,
  timerActive: boolean,
  timerCurrentSec: number,
  soundBtnActiveClass: string,
}
export interface Igenre {
  activeGenre: string,
  genreStat: {
    romanticism?: number,
    symbolism?: number,
    impressionism?: number,
    realism?: number,
    pellMell?: number,
    year?: number,
    baroque?: number,
    rococo?: number,
    renaissance?: number,
  }
}
export interface pictureJsonType {
  author: string,
  name: string,
  year: string,
  imageNum: string,
  style: string,
}
export interface IGamge {
  allRoundsData: pictureJsonType[],
  isReady: boolean,
  roundTab: number[],
  roundAnswers: boolean[],
  rightAnswer: string,
  isCorrectAnswer: boolean,
  answerBtns: string[],
  correctInfo: pictureJsonType,
  round: number,
  popUpIsOpen: boolean,
  timerAnimation: 'running' | 'paused',
  rightAnswerCount: number,
  totalAnswerCount: number,
}
export interface IpopUp {
  resultText: string,
  resultAnswer: string,
  isQuit: boolean,
}
