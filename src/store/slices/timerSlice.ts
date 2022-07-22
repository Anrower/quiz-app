import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Itimer } from './../../model/models';

interface TimerState {
  timer: Itimer,
}

const initialState: TimerState = {
  timer: {
    timerActive: true,
  }
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    toggleTimerActive(state, action: PayloadAction<boolean>) {
      state.timer.timerActive = action.payload
    }
  }
})

export default timerSlice.reducer
export const {
  toggleTimerActive
} = timerSlice.actions