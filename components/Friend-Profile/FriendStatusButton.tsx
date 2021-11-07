import { useState } from "react"
import myFetch from "../../lib/myFetch"
import useFetch from "../../lib/useFetch"

export default function FriendStatusButton({ friendId }) {

    //used to force rerendering to update update button style
    const [updateStatus, setUpdateStatus] = useState(false)

    //refetch when friendId or updateStatus changes
    const {fetchData, isFetchLoading, isFetchError} = useFetch(`http://localhost:4000/api/verify-friend/${friendId}`,'GET',null,[friendId,updateStatus])
    
    if(isFetchLoading) return null
    const friendRequestStatus = fetchData.data.friendRequestStatus
    const isFriend = fetchData.data.isFriend
    console.log(fetchData.data)

    async function handleAddFriend(e){

        e.preventDefault()
        const {data, loading, error} = await myFetch(`http://localhost:4000/api/request-friend/${friendId}`,'POST')
        data?.then(() => setUpdateStatus(!updateStatus) )

    }

    async function handleAcceptRequest(e){
        e.preventDefault()
        const {data, loading, error} = await myFetch(`http://localhost:4000/api/accept-friend/${friendId}`,'POST')
        data?.then(() => setUpdateStatus(!updateStatus) )
    }


    console.log(friendRequestStatus)

    return (
        <>
            <div className="container">

                {isFriend && <div className="btnPassive">Friends</div>}
                {friendRequestStatus === 'sent' && <div className="btnPassive">Request Sent</div>}
                {(friendRequestStatus === 'none' && !isFriend) && <div className="btnRequest" onClick={handleAddFriend}>+ Add Friend</div>}
                {friendRequestStatus === 'received' && <div className="btnAccept" onClick={handleAcceptRequest}>Accept Request </div>}
            </div>





            <style jsx>{`
                
                    .friends {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: gray;
                        pointer-events: none;

                    }

                    .btnPassive {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: gray;
                        pointer-events: none;
                    }
                    .btnRequest {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: #1877F2;
                        cursor: pointer;
                        color: white
                    }

                    .btnAccept {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: limegreen;
                        cursor: pointer;
                        color: white;
                    }
                
                `}</style>
        </>

    )
}