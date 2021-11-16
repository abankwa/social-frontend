// @ts-nocheck
import IncomingMessageCard from './IncomingMessageCard'
import OutgoingMessageCard from './OutgoingMessageCard'
import { useSelector, useDispatch } from "react-redux"
import messengerSlice from '../../lib/store/messengerSlice'
import { useContext } from 'react'

export default function MessagesBox() {

    const messages = useSelector(state => state.messengerContext.chatMessages)
    
    const context = useSelector(state => state.userContext.user)
    const currentUser = context.data.userId
    
    console.log(`user: ${JSON.stringify(currentUser)}`)

    console.log(messages)

    const element = messages.map(message => {
        return message.senderid === currentUser ? <OutgoingMessageCard text={message.messagetext} key={message.messageid}/> : <IncomingMessageCard text={message.messagetext} key={message.messageid}/>
    })


    return (
        <>
            <div className="container">
                <div className="topGap"></div>
                <div className="messageBox">
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
                
            `}</style>
        </>
    )
}