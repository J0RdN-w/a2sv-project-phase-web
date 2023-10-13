import { configureStore } from '@reduxjs/toolkit'
import storyReducer from './state/storySlice'

export default configureStore({
  reducer: {
    story: storyReducer
  }
})