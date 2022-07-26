import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingSlice";
import genreReducer from "./slices/genreSlice"
import gameReducer from "./slices/gameSlice"

const rootReducer = combineReducers({
  settings: settingsReducer,
  genre: genreReducer,
  game: gameReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
