import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingSlice";
import genreReducer from "./slices/genreSlice"

const rootReducer = combineReducers({
  settings: settingsReducer,
  genre: genreReducer,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
