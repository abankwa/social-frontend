// @ts-nocheck
import MessengerLayout from "../../layout/MessengerLayout"
import SiteLayout from "../../layout/SiteLayout"
import { FcInfo } from 'react-icons/fc'
import { BsFillTelephoneFill,BsCameraVideoFill } from 'react-icons/bs'
import { useEffect, useState } from "react"
import InputBar from "../../components/Messenger/InputBar"
import MessagesBox from "../../components/Messenger/MessagesBox"
import { useRouter } from "next/router"
import myFetch from "../../lib/myFetch"
import {  useDispatch } from "react-redux"
import { loadChatMessage,setActiveConversation } from '../../lib/store/messengerSlice'




export default function ChatPage() {
    
    

    const router = useRouter()
    const dispatch = useDispatch()
    const [showInfo, setShowInfo] = useState(false)
    const conversationid = router.query?.conversationid

    
    const [messageData, setMessageData] = useState()
    const [messageError, setMessageError] = useState()
    const [messageLoading, setMessageLoading] = useState()

    
    const [participantData, setParticipantData] = useState()
    const [participantError, setParticipantError] = useState()
    const [participantLoading, setParticipantLoading] = useState()



    //get all messages for this conversation
    useEffect(() => {
        const data = myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${conversationid}`, 'GET')

        data.then(x => {
            setMessageData(x[0])
        })
        //set the currently active conversation
        dispatch(setActiveConversation(conversationid))
    },[conversationid])


    useEffect(() => {
        if(messageData) {

            if(messageData.status === 'success') dispatch(loadChatMessage(messageData.data))   
        }
    },[messageData])



    //get all participants for this conversation

    useEffect(() => {
        const data = myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/participants/${conversationid}`, 'GET')
        data.then(x => {
            setParticipantData(x[0].data)
        })
    },[conversationid])
    
    let members = ""
    if(participantData){

          participantData.map(x => {
              if(members === "") members = `${x.firstname} ${x.lastname}`
              else members = `${members}, ${x.firstname} ${x.lastname}`})
            
    }   

   


    function handleInfoToggle() {
        setShowInfo(!showInfo)
    }

    return (
        <>
            <div className="container">
                <div className="chatBox">
                    <div className="phoneBar">
                        <div className="profile">
                            <div className="photo"></div>
                            <div className="nameBox">
                                {participantData && <div className="name">{members}</div>}
                                <div className="status">Active 16Hrs Ago</div>
                            </div>
                        </div>
                        <div className="controls">
                            <div className="phone"><div><BsFillTelephoneFill size="25px" /></div></div>
                            <div className="camera"><div><BsCameraVideoFill size="25px" /></div></div>
                            <div className="info"><div onClick={handleInfoToggle}><FcInfo size="25px" /></div></div>
                        </div>
                    </div>
                    <div className="messageArea"><MessagesBox /></div>
                    <div className="inputBar"><InputBar /></div>
                </div>
                {showInfo && <div className="friendInfo">dd</div>}
            </div>




            <style jsx>{`
                
                .container{
                    
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    
                }
               
                .chatBox {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    
                }
                .phoneBar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 60px;
                    width: 100%;
                    position: sticky;
                    border-bottom: lightgray solid 1px;
                    
                }
                .profile {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;

                }
                .photo {
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                }
                .nameBox {
                    flex-grow:1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
    
                }

                .controls {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 150px;
                    height: 100%;
                    border: green 1px solid;
                    
                }
                .phone, .camera,.info {
                    flex-grow: 1;
                    flex-basis: 0;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                    
                }
                .info, .camera, .phone > div{
                    cursor: pointer;
                    color: rgb(33, 150, 243);
                }

                

                .friendInfo{
                    min-width: 300px;
                    width: 300px;
                    border-left: lightgray solid 1px;
                    
                   
                }
                .messageArea {
                    flex: 1;
                    overflow: scroll;
                }

                .inputBar{
           
                    width: 100%;
                }

                
                
                
            
            `}</style>
        </>
    )
}


ChatPage.getLayout = function getLayout(page) {

    return (
        <SiteLayout >
            <MessengerLayout>
                {page}
            </MessengerLayout>
        </SiteLayout>
    )
}

ChatPage.getInitialProps  = async (ctx) => {
    return {foo:'foo'}
}