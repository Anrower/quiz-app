import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IpopUp } from './../../model/models';
interface PopUpState {
  popUp: IpopUp,
}

const initialState: PopUpState = {
  popUp: {
    resultText: '',
    resultAnswer: '',
    isQuit: false,
  }
}

export const popUpSlice = createSlice({
  name: 'popUP',
  initialState,
  reducers: {
    updateResulText(state, action: PayloadAction<string>) {
      state.popUp.resultText = action.payload
    },
    updateResultAnswer(state, action: PayloadAction<string>) {
      state.popUp.resultAnswer = action.payload
    },
    updateIsQuitState(state, action: PayloadAction<boolean>) {
      state.popUp.isQuit = action.payload
    },
  }
})

export default popUpSlice.reducer
export const {
  updateResulText, updateResultAnswer, updateIsQuitState
} = popUpSlice.actions
