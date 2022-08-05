import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGamge, pictureJsonType } from './../../model/models';

interface GameState {
  game: IGamge
}

const initialState: GameState = {
  game: {
    allRoundsData: [],
    isReady: false,
    roundTab: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    roundAnswers: [],
    round: 0,
    rightAnswer: '',
    isCorrectAnswer: false,
    answerBtns: ['', '', '', ''],
    correctInfo: {
      author: '',
      name: '',
      year: '',
      imageNum: ''
    },
    popUpIsOpen: false,
    timerAnimation: 'running'
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateRightAnswer(state, action: PayloadAction<string>) {
      state.game.rightAnswer = action.payload
    },
    updateCorrectAnswer(state, action: PayloadAction<boolean>) {
      state.game.isCorrectAnswer = action.payload
    },
    updateAnswerBtns(state, action: PayloadAction<string[]>) {
      state.game.answerBtns = action.payload
    },
    updateCorrectInfo(state, action: PayloadAction<pictureJsonType>) {
      state.game.correctInfo = { ...action.payload }
    },
    nextRound(state) {
      state.game.roundTab[state.game.round] = 1
      state.game.round += 1
    },
    updateLastTab(state) {
      state.game.roundTab[9] = 1
    },
    resetRound(state) {
      state.game = initialState.game
    },
    openPopup(state, action: PayloadAction<boolean>) {
      state.game.popUpIsOpen = action.payload
    },
    updateTimerAnimation(state, action: PayloadAction<'running' | 'paused'>) {
      state.game.timerAnimation = action.payload
    },
    updateRoundAnswer(state, action: PayloadAction<boolean>) {
      state.game.roundAnswers.push(action.payload)
    },
    updateIsReady(state, action: PayloadAction<boolean>) {
      state.game.isReady = action.payload
    },
    updateAllRoundsData(state, action: PayloadAction<pictureJsonType[]>) {
      state.game.allRoundsData = { ...action.payload }
    },
  }
})

export default gameSlice.reducer
export const {
  updateRightAnswer, updateCorrectAnswer, updateAnswerBtns, updateCorrectInfo, nextRound, resetRound, openPopup, updateTimerAnimation, updateRoundAnswer, updateIsReady, updateAllRoundsData, updateLastTab
} = gameSlice.actions