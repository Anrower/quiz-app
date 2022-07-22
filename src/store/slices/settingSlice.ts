import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetting } from './../../model/models';
interface SettingState {
  setting: ISetting,
}

const initialState: SettingState = {
  setting: {
    volumeRange: '40',
    volumeOff: false,
    gameTimerOff: false,
    timeAnswer: 40
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
      state.setting.volumeOff = action.payload;
    },
    updateTimerSwitch(state, action: PayloadAction<boolean>) {
      state.setting.gameTimerOff = action.payload
    },
    increaseTimeAnswer(state) {
      state.setting.timeAnswer = state.setting.timeAnswer + 5
    },
    decreaseTimeAnswer(state) {
      state.setting.timeAnswer = state.setting.timeAnswer - 5
    },
  }
})

export default settingSlice.reducer
export const {
  updateVolumeRange,
  updateVolumeSwitch,
  updateTimerSwitch,
  increaseTimeAnswer,
  decreaseTimeAnswer
} = settingSlice.actions
