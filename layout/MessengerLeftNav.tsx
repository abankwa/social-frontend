// @ts-nocheck
import { BsThreeDots } from 'react-icons/bs'
import { RiVideoAddFill } from 'react-icons/ri'
import { BiMessageAdd } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux"
import { setShowNewMessage, removeAllChatMembers } from '../lib/store/messengerSlice'
import myFetch from '../lib/myFetch'
import ConversationCard from '../components/Messenger/ConversationCard'

export default function MessengerLeftNav() {

    const router = useRouter()
    const showNewMessage = useSelector((state) => state.messengerContext.showNewMessage)
    const dispatch = useDispatch()

    //get all existing conversations
    const [conversationData, setMessageData] = useState()
    const [conversationError, setMessageError] = useState()
    const [coversationLoading, setMessageLoading] = useState()


    useEffect(() => {
        const data = myFetch(`http://localhost:4000/api/conversations`, 'GET')

        data.then(x => {
            setMessageData(x[0])
        })
    },[])

    console.log(conversationData)

    //show a new nav card for New message when we click a new message
    function handleNewMessage() {
        dispatch(setShowNewMessage(true))
        router.push('/messages/new')
    }
    //remove the new message nav card when we close new message
    function handleCloseNewMessage() {
        dispatch(setShowNewMessage(false))
        dispatch(removeAllChatMembers(null))
        router.push('/messages/1')
    }

    if(coversationLoading) return <div>loading</div>
    if(!conversationData) return <div>loading...</div>
    console.log(conversationData)

    const conversationList = conversationData.data.map(convo => {
        return <ConversationCard key={convo.conversationid} data={convo} />
    })


    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="title">
                        <div className="text">Chats</div>
                        <div className="controls">
                            <div className="detail"><div><BsThreeDots size="25px" /></div></div>
                            <div className="newVideo"><div><RiVideoAddFill size="25px" /></div></div>
                            <div className="newChat" onClick={handleNewMessage}><div><BiMessageAdd size="25px" /></div></div>
                        </div>
                    </div>
                    <div className="search">search</div>
                </div>
                <div className="chats">
                    {showNewMessage && <Link href="/messages/new"><div className="newMessage">
                        <div className="profile">
                            <div className="photo"></div>
                            <div className="name">New Message to John Appleseed</div>
                        </div>
                        <div className="closeNewMessage" onClick={handleCloseNewMessage}><div><MdOutlineClose /></div></div>
                    </div></Link>}
                {conversationList}
                </div>
            </div>




            <style jsx>{`
            .container {
                width: 350px;
                min-width: 350px;
                height: 100%;
                border: lightgray 1px solid;
                
            }
           
            .header {
                display: flex;
                flex-direction: column;
                height: 100px;
                border-bottom: lightgray 1px solid;
            }
            .title{
                flex-grow: 1;
                flex-basis: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
            }
            .controls{
                display: flex;
                border: red 1px solid;
                width: 150px;
                
            }
           .detail, .newVideo, .newChat {
               flex-grow: 1;
               flex-basis: 0;
               display: flex;
               justify-content:center;
               align-items: center;
           }
          
           .detail, .newVideo, .newChat > *{
               cursor: pointer;
           }

            .search{
                flex-grow: 1;
                flex-basis: 0;
            }

            .newMessage {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            .profile {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .photo {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                background: lightgray;
            }
            .closeNewMessage {
                display: flex;
                justify-content: center;
                align-items: center;
            
            }
            .closeNewMessage > div {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .closeNewMessage > div:hover{
                background: lightgray;
                cursor: pointer;
            }

            
         `}</style>
        </>
    )
}