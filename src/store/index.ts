import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingSlice";
import genreReducer from "./slices/genreSlice"
import gameReducer from "./slices/gameSlice"
import popUpReducer from "./slices/popUpSlice";
import galleryReducer from "./slices/gallerySlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  genre: genreReducer,
  game: gameReducer,
  popup: popUpReducer,
  gallery: galleryReducer,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
