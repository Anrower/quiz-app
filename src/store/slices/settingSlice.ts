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
    timeAnswer: 20
  }
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateVolumeRange(state, action: PayloadAction<string>) {
      console.log(action.payload)
      state.setting.volumeRange = action.payload
    },
    updateVolumeSwitch(state, action: PayloadAction<boolean>) {
      state.setting.volumeOff = action.payload;
    },
    updateTimerSwitch(state, action: PayloadAction<boolean>) {

      state.setting.gameTimerOff = action.payload
    },
    updateTimeAnswer(state, action: PayloadAction<number>) {
      state.setting.timeAnswer = action.payload
    },
  }
})

export default settingSlice.reducer
export const {
  updateVolumeRange,
  updateVolumeSwitch,
  updateTimerSwitch,
  updateTimeAnswer
} = settingSlice.actions
