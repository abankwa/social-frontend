// @ts-nocheck
import { AiFillLike } from 'react-icons/ai'
import { IoIosAddCircle, IoMdSend } from 'react-icons/io'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FaTheaterMasks, FaMicrophone, FaSmile } from 'react-icons/fa'
import { RiFileGifLine, RiVideoAddFill } from 'react-icons/ri'
import { AiOutlinePaperClip, AiFillDollarCircle } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addChatMessage, addUnsentMessage, addConversation, setActiveConversation, removeAllChatMembers } from '../../lib/store/messengerSlice'
import myFetch from '../../lib/myFetch'
import { useRouter } from 'next/router'
import { io } from 'socket.io-client'
import { socket } from '../../lib/socket'


export default function InputBar() {


    const [isText, setIsText] = useState(false)
    const [showToolBar, setShowToolBar] = useState(false)
    const messageRef = useRef()
    const sendButtonRef = useRef()
    const dispatch = useDispatch()
    const router = useRouter()
    const unsentChatMessage = useSelector(state => state.messengerContext.unsentChatMessage)


    const activeConversation = useSelector(state => state.messengerContext.activeConversation)
    const chatMembers = useSelector(state => state.messengerContext.chatMembers)


    const [messageData, setMessageData] = useState()
    const [messageLoading, setMessageLoading] = useState()
    const [messageError, setMessageError] = useState()

    const [conversationData, setConversationData] = useState()
    const [conversationLoading, setConversationLoading] = useState()
    const [conversationError, setConversationError] = useState()

    useEffect(() => {
        // socket = io(`${process.env.NEXT_PUBLIC_API_URL}`, { transports: ['websocket'], upgrade: false });
        // return () => {
        //     socket.off('chat', () => { })
        //     socket.removeAllListeners()
        // }
        
        const socket = new WebSocket('ws://localhost:4000')
        socket.addEventListener('message',(data) => {
            console.log(data)
        })
        if(socket.readyState === 1)socket.send('heya')
        
        
        return () => {socket.close()}

    },[socket])
    

    //socket = io(`${process.env.NEXT_PUBLIC_API_URL}`,{transports: ['websocket'], upgrade: false});

    // if (socket) {
    //     socket.on("message", data => {
    //         console.log(data)
    //     })

    // }


    //INPUT MESSAGE PERSISTENCE
    useEffect(() => {
        //load previously unsent chat message in input box
        if (unsentChatMessage) {
            messageRef.current.value = unsentChatMessage
            setIsText(true)
        }
        messageRef.current.focus()

    }, [unsentChatMessage])

    //store message being typed on every stroke. if user navigates away without sending,
    //repopulate the text field so they continue where they left off.
    function handleChange(e) {
        if (e.target.value) setIsText(true)
        else setIsText(false)

        dispatch(addUnsentMessage(messageRef.current.value))
    }

    //toggle right side pane for friend profile details.
    function handleShowToolBar(e) {
        setShowToolBar(!showToolBar)
    }


    function handleSendMessage() {

        if (messageRef.current.value) {

            //clear unsent message state
            dispatch(addUnsentMessage(""))

            //if this is a new conversation(ie. we selected friends who we don't have previous conversation with 
            // on the /new page), create a new conversation for the selected participant(s), send the message
            // and goto the conversation page.
            if (!activeConversation) {

                const chatData = {
                    chatMembers: chatMembers.map(member => member.userid),
                    messagetext: messageRef.current.value,
                }

                //create new conversation and save the message
                const data = myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conversation-with-message`, 'POST', chatData)
                data.then(x => {
                    setConversationData(x[0])
                    messageRef.current.value = ""


                    if (x[0].status === 'success') {

                        //push new message to store to update message box
                        dispatch(addChatMessage(x[0].data[0]))

                        //push new conversation to store to update conversation nav
                        const conversation = {
                            conversationid: x[0].data[0].conversationid,
                            conversationdata: 'get the convo date'
                        }

                        dispatch(addConversation(conversation))
                        //clean up
                        //1. set active conversation
                        dispatch(setActiveConversation(conversation.conversationid))
                        //2. empty member list
                        dispatch(removeAllChatMembers())
                        //3. redirect to /messages/conversationid page
                        router.push(`/messages/${conversation.conversationid}`)
                    }

                    //update the conversation list store??
                })

                //if this is an existing conversation (ie. we selected friends we have a previous conversation),
                //goto the conversation page and send the message
            } else {

                const chatMessage = {
                    messagetext: messageRef.current.value,
                    conversationid: activeConversation
                }

                const data = myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/message`, 'POST', chatMessage)
                data.then(x => {
                    setMessageData(x[0])
                    messageRef.current.value = ""
                    if (x[0].status === 'success') {
                        //push new message to store to update message box
                        dispatch(addChatMessage(x[0].data[0]))

                    }
                })
            }

        }
    }

    //when a user presses enter after typing in chat box, click the send button
    function handleKeyDown(e) {
        if (e.keyCode === 13) sendButtonRef.current.click()
    }


    return (
        <>
            <div className="container">
                {showToolBar && <div className="toolBar">
                    <div><HiOutlinePhotograph size="20px" /></div>
                    <div><FaTheaterMasks size="20px" /></div>
                    <div><RiFileGifLine size="20px" /></div>
                    <div><AiOutlinePaperClip size="20px" /></div>
                    <div><AiFillDollarCircle size="20px" /></div>
                    <div><RiVideoAddFill size="20px" /></div>
                    <div><FaMicrophone size="20px" /></div>
                </div>}
                <div className="inputContainer">
                    <div className="toolButtons">
                        <div onClick={handleShowToolBar}><IoIosAddCircle size="20px" /></div>
                        <div> <HiOutlinePhotograph size="20px" /></div>
                        <div><FaTheaterMasks size="20px" /></div>
                        <div> <RiFileGifLine size="20px" /></div>
                    </div>
                    <div className="txtArea">
                        <div className="txtBox"><input className="txtInput" type="text" placeholder="Aa" ref={messageRef} onChange={handleChange} onSubmit={handleSendMessage} onKeyDown={handleKeyDown} ></input></div>
                        <div className="emoji"><FaSmile size="20px" /></div>
                    </div>
                    {isText ? <div className="sendOrLike" ref={sendButtonRef} onClick={handleSendMessage}><IoMdSend size="20px" /></div> :
                        <div className="sendOrLike"><AiFillLike size="20px" /></div>}
                </div>
            </div>





            <style jsx>{`
                .container *{
                    
                }
                .toolBar {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .toolBar > * {
                    flex-grow: 1;
                    flex-basis: 0;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: lightgray;
                    margin-bottom: 5px;
                    padding: 5px;
                    
                }
                .toolBar > *:hover {
                    filter: brightness(80%);
                    cursor: pointer;
                }

                .inputContainer {
                    height: 30px;
                    display: flex;
                    justify-content: space-between;
                }
                
               
                .toolButtons {
                    width: 130px;
                    display: flex;
                    align-items: center;
                }
                .toolButtons > *{
                    flex-grow: 1;
                    flex-basis: 0;  
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    color: #0084ff;
                }
                .toolButtons > *:hover{
                    filter: brightness(80%)
                }

                .txtArea {
                    flex:1;
                    display: flex;
                    border-radius: 12px;
                    background: lightgray;

                }
                .txtBox {
                    flex: 1;
                    display: flex;
                    align-items: center;
                }
                .txtInput{
                    outline: none;
                    border: none;
                    width: 100%;
                    height: 30px;
                    border-radius: 12px;
                    background: lightgray;
                    padding-left: 10px;
                }
                .emoji {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-right: 5px; 
                    color: #0084ff;
                }
                .emoji:hover {
                    filter: brightness(80%);
                }

                .sendOrLike {
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    color: #0084ff;
                    cursor: pointer;
                }
                
            `}</style>
        </>
    )
}