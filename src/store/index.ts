import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingSlice";
import genreReducer from "./slices/genreSlice"
import timerReducer from "./slices/timerSlice"

const rootReducer = combineReducers({
  settings: settingsReducer,
  genre: genreReducer,
  timer: timerReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
