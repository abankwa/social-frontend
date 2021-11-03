import { configureStore } from '@reduxjs/toolkit'
import friendIdReducer from '../store/friendSlice'

export default configureStore({
  reducer: {
    friendId: friendIdReducer
  }
})