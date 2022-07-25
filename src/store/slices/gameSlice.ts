import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGamge } from './../../model/models';

interface GameState {
  game: IGamge
}

const initialState: GameState = {
  game: {
    author: '',
    isCorrectAnswer: false,
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
    }

  }
})

export default gameSlice.reducer
export const {
  updateAuthor, updateCorrectAnswer
} = gameSlice.actions