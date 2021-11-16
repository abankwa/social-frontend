import { configureStore } from '@reduxjs/toolkit'
import userContextReducer from '../store/userSlice'
import genContextReducer from '../store/genContextSlice'
import messengerContextReducer from '../store/messengerSlice'

export default configureStore({
  reducer: {
    userContext: userContextReducer,
    genContext: genContextReducer,
    messengerContext: messengerContextReducer
  }
})