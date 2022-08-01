import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IpopUp } from './../../model/models';
interface PopUpState {
  popUp: IpopUp,
}

const initialState: PopUpState = {
  popUp: {
    resultText: '',
    resultAnswer: '',
  }
}

export const popUpSlice = createSlice({
  name: 'popUP',
  initialState,
  reducers: {
    updateResulText(state, action: PayloadAction<string>) {
      state.popUp.resultText = action.payload
    },
    updateResultAnswer(state, action: PayloadAction<string | JSX.Element>) {
      state.popUp.resultAnswer = action.payload
    },
  }
})

export default popUpSlice.reducer
export const {
  updateResulText, updateResultAnswer
} = popUpSlice.actions
