// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

export const messengerSlice = createSlice({
    name: 'messengerContext',
    initialState: {
      showNewMessage: false,
      chatMembers: [],
      chatMessages: [],
      unsentChatMessage: "",
      activeConversation: "",
      test: true

    },
    reducers: {
      setShowNewMessage: (state,action) => {
        state.showNewMessage = action.payload
      },
      addChatMember: (state, action) => {
        state.chatMembers.push(action.payload)
      },
      removeChatMember: (state, action) => {
        state.chatMembers = state.chatMembers.filter((item) => item.userid !== action.payload.userid)
      },
      removeAllChatMembers: (state, action) => {
        state.chatMembers = []
      },
      loadChatMessage: (state, action) => {
        state.chatMessages = action.payload
        console.log(`loading messages: ${state.chatMessages}`)
      },
      addChatMessage: (state, action) => {
        state.chatMessages.push(action.payload)
      },
      addUnsentMessage: (state, action) => {
        state.unsentChatMessage = action.payload
      },
      setActiveConversation: (state,action) => {
        state.activeConversation = action.payload
        console.log(`convo: ${action.payload}`)
      }

    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setShowNewMessage,addChatMember,removeChatMember, removeAllChatMembers, addChatMessage, addUnsentMessage, setActiveConversation,loadChatMessage } = messengerSlice.actions
  
  export default messengerSlice.reducer