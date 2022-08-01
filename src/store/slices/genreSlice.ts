import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Igenre } from './../../model/models';

interface GenreState {
  genre: Igenre
}

const initialState: GenreState = {
  genre: {
    activeGenre: 'artist',
    genreStat: {
      artist: 0,
      year: 0,
    }
  }
}

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    updateActiveGenre(state, action: PayloadAction<string>) {
      state.genre.activeGenre = action.payload
    },
    updateGenreStat(state, action: PayloadAction<object>) {
      state.genre.genreStat = action.payload
    },
  }
})

export default genreSlice.reducer
export const {
  updateActiveGenre, updateGenreStat
} = genreSlice.actions