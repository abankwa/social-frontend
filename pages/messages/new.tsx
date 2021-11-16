// @ts-nocheck
import MessengerSearch1 from "../../components/Messenger/MessengerSearch1"
import MessengerLayout from "../../layout/MessengerLayout"
import SiteLayout from "../../layout/SiteLayout"
import { useState, useEffect } from "react"
import ChatMember from "../../components/Messenger/ChatMember"
import MessengerSearchItem from "../../components/Messenger/MessengerSearchItem"
import { useSelector, useDispatch } from "react-redux"
import { setShowNewMessage, setActiveConversation, loadChatMessage } from '../../lib/store/messengerSlice'
import useFetch2 from "../../lib/useFetch"
import myFetch from "../../lib/myFetch"
import MessagesBox from '../../components/Messenger/MessagesBox'
import InputBar from "../../components/Messenger/InputBar"


export default function NewMessage() {

    const dispatch = useDispatch()

    const [showMessages, setShowMessages] = useState(false)
    //get previously selected chat members in new chat page
    const chatMembers = useSelector((state) => state.messengerContext.chatMembers)

    const [fetchData, setFetchData] = useState()
    const [fetchError, setFetchError] = useState()
    const [fetchLoading, setFetchLoading] = useState()

    const [messageData, setMessageData] = useState()
    const [messageError, setMessageError] = useState()
    const [messageLoading, setMessageLoading] = useState()

    useEffect(() => {
        //show a new left nav card for New message when we load new Message page
        dispatch(setShowNewMessage(true))


        //when a chat participant is selected, check backend to see if the current 
        //list of participants constitutes a previous conversation, and fetch all the
        //messages for that conversation.  

        if (chatMembers.length === 0) {
            //clear old data value if participant list is empty
            setFetchData([])
            //clear the active conversation tracker
            dispatch(setActiveConversation(""))
            setShowMessages(false)
        }

        if (chatMembers.length > 0) {
            setShowMessages(true)
            const members = chatMembers.map((member) => member.userid)
            const data = myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conversation-given-members`, 'POST', { data: members })

            data.then(x => {
                setFetchData(x[0])
            })

        }

        return () => {
            //if the chat member list is empty while navigating away from new message
            //page, remove the new message left nav
            if (chatMembers.length === 0) dispatch(setShowNewMessage(false))
        }
    }, [chatMembers])


    useEffect(() => {
        if (fetchData?.data) {
            //we found an existing conversation matching the currently selected list of chat members
            if (fetchData.data.length > 0) {
                const conversationid = fetchData.data[0].conversationid

                //save the conversationid
                dispatch(setActiveConversation(conversationid))

                //show the message and input box
                //setShowMessages(true)

                //get all the messages for this conversation
                const data = myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${conversationid}`, 'GET')
                data.then(x => {
                    setMessageData(x[0])

                })

            } else {
                dispatch(setActiveConversation(""))
                setMessageData("")
                //setShowMessages(false)
            }
        } else {
            setMessageData("")
            //setShowMessages(false)
        }

    }, [fetchData])

    useEffect(() => {
        if (messageData?.data) {
            if (messageData.data.length > 0) {
                //save the messages
                dispatch(loadChatMessage(messageData.data))
                
            } else {
                dispatch(loadChatMessage([]))
                
            }
        } else {
            dispatch(loadChatMessage([]))
        }
    }, [messageData])



    if (messageData?.data) console.log(messageData.data)

    //Handle Live search
    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState()
    const [data, setData] = useState()


    async function handleLiveSearch(e) {
        let searchKey = e.target.value.trim()

        if (searchKey) {
            searchKey = searchKey.toLowerCase()
            try {
                setIsLoading(true)
                const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/global-search/${searchKey}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',

                })

                const data = await raw.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setIsError(true)
                setIsLoading(false)

            }
        } else setData("") //clear search after deletion textbox entries

    }


    let searchList
    if (data && data.status === 'success') {
        searchList = data.data.map(friend => (
            <div key={friend.userid}><MessengerSearchItem friend={friend} /></div>
        ))
    }


    const members = chatMembers.map((friend) => {
        return <ChatMember friend={friend} key={friend.userid} />
    })


    return (
        <>
            <div className="container">
                <div className="chatBox">
                    <div className="searchBar">

                        <div className="participants">
                            {members}
                        </div>
                        <div className="search">
                            <div className="to">To:</div>
                            <input type="text" placeholder="search friend" className="txtInput" onChange={handleLiveSearch}></input>
                            <div className="searchResult">
                                {searchList}
                            </div>
                        </div>
                    </div>
                    {showMessages && <div className="messageArea"><MessagesBox /></div>}
                    {showMessages && <div className="inputBar"><InputBar /></div>}
                </div>
            </div>




            <style jsx>{`
                .container {
                    
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    border: magenta solid 1px;
                   
                }
                .chatBox {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    
                }
               
                .searchBar {
                    position: relative;
                    display: flex;
                    justify-content: flex-start;
                    border-bottom: 1px solid lightgray;
                    min-height: 60px;  
                }

                .participants {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 10px 0px;
                    margin-left:40px;
                    gap: 3px;  
                }

                .to{
                    position: absolute;
                    left: 0px;
                    top: 20px;
                }
                
                .search{
                    display: flex;
                    align-items: center;
                    

                    
                }
                .searchResult{
                    position: absolute;
                    width: 300px;
                    border: green 1px solid;
                    height: 300px;
                    overflow-y: scroll;
                    border-radius: 5px;
                    top: 60px;
                }

                .txtInput {
                    height: 30px;
                    outline: none;
                    margin-left: 5px;
                    border: none;
                }
                
                .chatBox {
                   display: flex;
                   flex-direction: column;
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

NewMessage.getLayout = function getLayout(page) {

    return (
        <SiteLayout >
            <MessengerLayout>
                {page}
            </MessengerLayout>
        </SiteLayout>
    )
}