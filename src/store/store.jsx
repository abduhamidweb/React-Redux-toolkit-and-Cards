import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../slice/CardSlice';
import counterReducer from '../slice/checkmodal'
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
  },
})
