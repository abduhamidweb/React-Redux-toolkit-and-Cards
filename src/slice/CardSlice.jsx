import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    id: 1,
    title: 'Hello world!',
    descrbtion: "this is the first time you're doing something... ",
    imgURL: 'https://picsum.photos/400/400',
    reaction: {
      smail: 0,
      worrid: 0,
      stupit: 0,
      angry: 0,
    },
    like: false,
    saved: false,
  },
  {
    id: 2,
    title: 'Hello world!',
    descrbtion: "this is the first time you're doing something... ",
    imgURL: 'https://picsum.photos/400/400',
    reaction: {
      smail: 0,
      worrid: 0,
      stupit: 0,
      angry: 0,
    },
    like: false,
    saved: false,
  },
]
const checkTrueOrFalse = {
  modal: false,
}
const postSlice = createSlice({
  name: 'posts',
  initialState,
  checkTrueOrFalse,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
    toggledLike: (state, action) => {
      if (action.payload) {
        state.forEach((item) => {
          if (item.id == action.payload) {
            item.like = item.like ? false : true
          }
        })
      }
    },

    removeDeleteCard: (state, action) => {
      return state.filter((item) => item.id * 1 !== action.payload * 1)
    },
    savedAdd: (state, action) => {
      if (action.payload) {
        state.forEach((item) => {
          if (item.id == action.payload) {
            item.saved = item.saved ? false : true
          }
        })
      }
    },
    toggledModal: (state, action) => {
      state.modal = true
    },
  },
})
export const selectAllPosts = (state) => state.posts
export const { postAdded, toggledLike, removeDeleteCard, savedAdd, toggledModal }=postSlice.actions
export default postSlice.reducer
