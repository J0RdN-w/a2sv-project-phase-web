import { createSlice } from '@reduxjs/toolkit'
import data from '../data/story.json'

export const storySlice = createSlice({
  name: 'story',
  initialState: {
    stories: data ?? [],
  },
  reducers: {
    likeStory: (state, action) => {
      state.stories.forEach(story => {
        if (story.id === action.payload){
          if(story.isLiked){
            story.likes -= 1
            story.isLiked = false
          }else{
            story.likes += 1
            story.isLiked = true
          }
        }
      })
    },
  }
})

// Action creators are generated for each case reducer function
export const { likeStory } = storySlice.actions

export default storySlice.reducer