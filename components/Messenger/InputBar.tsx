// @ts-nocheck
import { AiFillLike } from 'react-icons/ai'
import { IoIosAddCircle, IoMdSend } from 'react-icons/io'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FaTheaterMasks, FaMicrophone, FaSmile } from 'react-icons/fa'
import { RiFileGifLine, RiVideoAddFill } from 'react-icons/ri'
import { AiOutlinePaperClip, AiFillDollarCircle } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addChatMessage, addUnsentMessage } from '../../lib/store/messengerSlice'
import myFetch from '../../lib/myFetch'

export default function InputBar() {

    const [isText, setIsText] = useState(false)
    const [showToolBar, setShowToolBar] = useState(false)
    const messageRef = useRef()
    const dispatch = useDispatch()
    const unsentChatMessage = useSelector(state => state.messengerContext.unsentChatMessage)

    const activeConversation = useSelector(state => state.messengerContext.activeConversation)
    const chatMembers = useSelector(state => state.messengerContext.chatMembers)


    const [messageData, setMessageData] = useState()
    const [messageLoading, setMessageLoading] = useState()
    const [messageError, setMessageError] = useState()

    const [conversationData, setConversationData] = useState()
    const [conversationLoading, setConversationLoading] = useState()
    const [conversationError, setConversationError] = useState()

    //
    useEffect(() => {
        //load previously unsent chat message in input box
        if (unsentChatMessage) {
            messageRef.current.value = unsentChatMessage
            setIsText(true)
        }
        messageRef.current.focus()

    }, [unsentChatMessage])

    function handleChange(e) {
        if (e.target.value) setIsText(true)
        else setIsText(false)

        dispatch(addUnsentMessage(messageRef.current.value))
    }



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
                console.log('new convo')
                console.log(chatMembers)


                const chatData = {
                    chatMembers: chatMembers.map(member => member.userid),
                    messagetext: messageRef.current.value,
                }

                const data = myFetch(`http://localhost:4000/api/conversation-with-message`, 'POST', chatData)
                data.then(x => {
                    setConversationData(x[0])
                    messageRef.current.value = ""
                    //push new message to store if success??

                    //update the conversation list store??
                })

                //if this is an existing conversation (ie. we selected friends we have a previous conversation),
                //goto the conversation page and send the message
            } else {
                console.log('existing convo')

                const chatMessage = {
                    messagetext: messageRef.current.value,
                    conversationid: activeConversation
                }

                const data = myFetch(`http://localhost:4000/api/message`, 'POST', chatMessage)
                data.then(x => {
                    setMessageData(x[0])
                    messageRef.current.value = ""
                    //push new message to store if success??
                })
            }

            //console.log(messageRef.current.value)

            console.log(`active conversation: ${activeConversation}`)

            // const message = {
            //     type: "out", 
            //     text: messageRef.current.value
            // }
            // dispatch(addChatMessage(message))

            // //clear textbox after sending message
            // messageRef.current.value = ""

        }
    }

    console.log(messageData)

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
                        <div className="txtBox"><input className="txtInput" type="text" placeholder="Aa" ref={messageRef} onChange={handleChange}></input></div>
                        <div className="emoji"><FaSmile size="20px" /></div>
                    </div>
                    {isText ? <div className="sendOrLike"><IoMdSend size="20px" onClick={handleSendMessage} /></div> :
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