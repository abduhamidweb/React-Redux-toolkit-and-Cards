import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    modal: false,
  },
  reducers: {
    increment: (state) => {
      state.modal = state.modal ? false : true
    },
  },
})
export const { increment } = counterSlice.actions
export default counterSlice.reducer
