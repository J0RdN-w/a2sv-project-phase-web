import { configureStore } from '@reduxjs/toolkit'
import todoloReducer from './todoloSlice'

export const store = configureStore({
    reducer: {
        todolo: todoloReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch