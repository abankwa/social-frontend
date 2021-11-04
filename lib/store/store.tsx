import { configureStore } from '@reduxjs/toolkit'
import userContextReducer from '../store/userSlice'

export default configureStore({
  reducer: {
    userContext: userContextReducer
  }
})