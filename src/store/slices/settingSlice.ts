import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetting } from './../../model/models';
interface SettingState {
  setting: ISetting,
}

const initialState: SettingState = {
  setting: {
    volumeRange: '40',
    isSound: true,
    showTimer: true,
    timeAnswerSec: 100,
    timerActive: true,
    timerCurrentSec: 100,
  }
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateVolumeRange(state, action: PayloadAction<string>) {
      state.setting.volumeRange = action.payload
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
} = settingSlice.actions
