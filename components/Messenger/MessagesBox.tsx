// @ts-nocheck
import IncomingMessageCard from './IncomingMessageCard'
import OutgoingMessageCard from './OutgoingMessageCard'
import { useSelector, useDispatch } from "react-redux"
import { useContext, useEffect, useRef } from 'react'

export default function MessagesBox() {

    //scroll to bottom of chatbox after each input
    const messageBoxRef = useRef()
    useEffect(() => {
        messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight, {behavior: 'smooth'})
    })

    const messages = useSelector(state => state.messengerContext.chatMessages)
    const context = useSelector(state => state.userContext.user)
    const currentUser = context.userId
    
    const element = messages.map(message => {
        return message.senderid === currentUser ? <OutgoingMessageCard text={message.messagetext} key={message.messageid}/> : <IncomingMessageCard text={message.messagetext} key={message.messageid}/>
    })
    

    return (
        <>
            <div className="container" >
                <div className="topGap"></div>
                <div className="messageBox" ref={messageBoxRef}>
                    {element}
                </div>
            </div>



            <style jsx>{`
                .container{
                    border: solid 1px green;
                    height: 100%;
                    overflow-y: scroll;
                    display: flex;
                    flex-direction: column;
                }
                .topGap {
                    flex: 1;
                }
                .outMessageBar{
                    display: flex;
                    justify-content: flex-end;
                    align-content: center;
                }
                .messageBox {
                    overflow-y: scroll;
                }
                
            `}</style>
        </>
    )
}