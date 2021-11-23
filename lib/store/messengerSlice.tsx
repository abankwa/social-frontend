// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

export const messengerSlice = createSlice({
    name: 'messengerContext',
    initialState: {
      showNewMessage: false,
      chatMembers: [],
      chatMessages: [],
      conversations: [],
      unsentChatMessage: "",
      activeConversation: "",
      testMessages: []

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
      },
      addChatMessage: (state, action) => {
        state.chatMessages.push(action.payload)
      },
      addUnsentMessage: (state, action) => {
        state.unsentChatMessage = action.payload
      },
      setActiveConversation: (state,action) => {
        state.activeConversation = action.payload
      },
      addConversation: (state, action) => {
        state.conversations.push(action.payload)
      },
      loadConversations: (state, action) => {
        state.conversations = action.payload;
      },
      setTestMessages: (state, action) => {
        state.testMessages.push(action.payload)
      }

    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setShowNewMessage,addChatMember,removeChatMember, removeAllChatMembers, addChatMessage, addUnsentMessage, setActiveConversation,loadChatMessage, addConversation,loadConversations, setChatSocket,setTestMessages } = messengerSlice.actions
  
  export default messengerSlice.reducer