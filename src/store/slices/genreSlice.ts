import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Igenre } from './../../model/models';

interface GenreState {
  genre: Igenre
}

const initialState: GenreState = {
  genre: {
    activeGenre: '',
  }
}

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    updateActiveGenre(state, action: PayloadAction<string>) {
      state.genre.activeGenre = action.payload
    }
  }
})

export default genreSlice.reducer
export const {
  updateActiveGenre
} = genreSlice.actions