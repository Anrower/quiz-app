import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetting } from './../../model/models';
interface SettingState {
  loading: boolean,
  error: string,
  settings: ISetting[],
}

const initialState: SettingState = {
  loading: false,
  error: '',
  settings: [],
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    fething(state) {
      state.loading = true
    },
    fetchSucces(state, action: PayloadAction<ISetting[]>) {
      state.loading = false
      state.settings = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default settingSlice.reducer