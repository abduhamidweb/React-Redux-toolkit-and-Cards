import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../slice/CardSlice'
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})
