import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface Todolo{
    id: number,
    task: string,
    isDone: boolean
}

interface Todolos {
    todolos: Todolo[]
  }

const initialState = {
    todolos: []
} as Todolos
export const todoloSlice = createSlice({
  name: 'todolo',
  initialState,
  reducers: {
    addTodolo: (state, action: PayloadAction<Todolo>) => {
      state.todolos.push(action.payload)
    },
    deleteTodolo: (state, action: PayloadAction<number>) => {
      state.todolos = state.todolos.filter((todolo:Todolo) => todolo.id !== action.payload)
    },
    updateTodolo: (state, action: PayloadAction<any>) => {
      state.todolos = state.todolos.map((todolo:Todolo) => {
        if(todolo.id === action.payload.id){
          return action.payload
        }
        return todolo
      })
    },
    markDone: (state, action: PayloadAction<number>) => {
      state.todolos = state.todolos.map((todolo:Todolo) => {
        if(todolo.id === action.payload){
          todolo.isDone = !todolo.isDone
        }
        return todolo
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodolo, deleteTodolo, updateTodolo, markDone } = todoloSlice.actions
export const selectCount = (state: RootState) => state.todolo.todolos

export default todoloSlice.reducer