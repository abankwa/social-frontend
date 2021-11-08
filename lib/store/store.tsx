import { configureStore } from '@reduxjs/toolkit'
import userContextReducer from '../store/userSlice'
import genContextReducer from '../store/genContextSlice'

export default configureStore({
  reducer: {
    userContext: userContextReducer,
    genContext: genContextReducer
  }
})