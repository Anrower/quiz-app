import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetting } from './../../model/models';
interface SettingState {
  setting: ISetting,
}

const initialState: SettingState = {
  setting: {
    volumeRange: '40',
    volumeToggle: true,
    gameTimerToggle: true,
    timeAnswer: 20
  }
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateVolumeRange(state, action: PayloadAction<string>) {
      state.setting.volumeRange = action.payload
    },
    updateVolumeToggle(state, action: PayloadAction<boolean>) {
      state.setting.volumeToggle = action.payload
    },
    toggleGameTimer(state, action: PayloadAction<boolean>) {
      state.setting.gameTimerToggle = action.payload
    },
    updateTimeAnswer(state, action: PayloadAction<number>) {
      state.setting.timeAnswer = action.payload
    },
  }
})

export default settingSlice.reducer
export const {
  updateVolumeRange,
  updateVolumeToggle,
  toggleGameTimer,
  updateTimeAnswer
} = settingSlice.actions
