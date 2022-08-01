import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"

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
  genreStat: {
    portrait?: number,
    nude?: number,
    surrealism?: number,
    landscape?: number,
    artist?: number,
    year?: number,
  }
}

export interface pictureJsonType {
  author: string,
  name: string,
  year: string,
  imageNum: string
}
export interface IGamge {
  roundTab: number[],
  roundAnswers: boolean[],
  rightAnswer: string,
  isCorrectAnswer: boolean,
  answerBtns: string[],
  correctInfo: pictureJsonType,
  round: number,
  popUpIsOpen: boolean,
  timerAnimation: 'running' | 'paused'
}

export interface IpopUp {
  resultText: string,
  resultAnswer: string | ReactJSXElement
}
