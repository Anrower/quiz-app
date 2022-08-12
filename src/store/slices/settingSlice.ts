import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetting } from './../../model/models';
interface SettingState {
  setting: ISetting,
}

const initialState: SettingState = {
  setting: {
    gameType: 'byArtist',
    volumeRange: 0,
    isSound: false,
    showTimer: true,
    timeAnswerSec: 20,
    timerActive: true,
    timerCurrentSec: 20,
    soundBtnActiveClass: 'sound-btn_active'
  }
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateVolumeRange(state, action: PayloadAction<number>) {
      state.setting.volumeRange = action.payload
    },
    updateGameType(state, action: PayloadAction<string>) {
      state.setting.gameType = action.payload
    },
    resetSettings(state) {
      state.setting = initialState.setting
    },
    updateAllSettingState(state, action: PayloadAction<ISetting>) {
      state.setting = action.payload
    },
    updateVolumeSwitch(state, action: PayloadAction<boolean>) {
      state.setting.isSound = action.payload;
    },
    updateTimerSwitch(state, action: PayloadAction<boolean>) {
      state.setting.showTimer = action.payload
    },
    increaseTimeAnswer(state) {
      state.setting.timeAnswerSec = state.setting.timeAnswerSec + 5
      state.setting.timerCurrentSec += 5
    },
    decreaseTimeAnswer(state) {
      state.setting.timeAnswerSec = state.setting.timeAnswerSec - 5
      state.setting.timerCurrentSec -= 5
    },
    updateTimeAnswer(state, action: PayloadAction<number>) {
      state.setting.timeAnswerSec = action.payload
    },
    toggleTimerActive(state, action: PayloadAction<boolean>) {
      state.setting.timerActive = action.payload
    },
    decrementTimerCurrentSec(state) {
      state.setting.timerCurrentSec -= 1
    },
    updateTimerCurrentSec(state, action: PayloadAction<number>) {
      state.setting.timerCurrentSec = action.payload
    },
  }
})

export default settingSlice.reducer
export const {
  updateVolumeRange,
  updateVolumeSwitch,
  updateTimerSwitch,
  increaseTimeAnswer,
  decreaseTimeAnswer,
  toggleTimerActive,
  decrementTimerCurrentSec,
  updateTimerCurrentSec,
  resetSettings,
  updateAllSettingState,
  updateTimeAnswer,
  updateGameType,
} = settingSlice.actions
