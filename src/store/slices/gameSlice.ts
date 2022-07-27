import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGamge, pictureJsonType } from './../../model/models';

interface GameState {
  game: IGamge
}

const initialState: GameState = {
  game: {
    roundTab: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    round: 1,
    author: '',
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
    updateAuthor(state, action: PayloadAction<string>) {
      state.game.author = action.payload
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
      state.game.roundTab[state.game.round - 1] = 1
      state.game.round += 1
    },
    resetRound(state, action: PayloadAction<number>) {
      state.game.round = action.payload
    },
    openPopup(state, action: PayloadAction<boolean>) {
      state.game.popUpIsOpen = action.payload
    },
    updateTimerAnimation(state, action: PayloadAction<'running' | 'paused'>) {
      state.game.timerAnimation = action.payload
    },
  }
})

export default gameSlice.reducer
export const {
  updateAuthor, updateCorrectAnswer, updateAnswerBtns, updateCorrectInfo, nextRound, resetRound, openPopup, updateTimerAnimation
} = gameSlice.actions