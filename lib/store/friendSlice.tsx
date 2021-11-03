import { createSlice } from '@reduxjs/toolkit'

export const friendSlice = createSlice({
    name: 'friendIId',
    initialState: {
      value: 11199
    },
    reducers: {
      setFriendId: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setFriendId } = friendSlice.actions
  
  export default friendSlice.reducer