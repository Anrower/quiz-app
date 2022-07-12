import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingSlice";

const rootReducer = combineReducers({
  settings: settingsReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}