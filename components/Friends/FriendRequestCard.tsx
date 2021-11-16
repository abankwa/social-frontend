// @ts-nocheck
import myFetch from "../../lib/myFetch"

export default function FriendRequestCard({friend, forceRender}) {


    async function handleConfirm(e){

        const {data, loading, error} = await myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accept-friend/${friend.userid}`,'POST')
        data?.then(() => forceRender())
        
    }

    async function handleDelete(){
        const {data, loading, error} = await myFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reject-friend/${friend.userid}`,'POST')
        data?.then(() => forceRender())
    }

    return (
        <>
            <div className="container">
                <div className="photo"><div>[photo]</div></div>
                <div className="content">
                    <div className="name">{`${friend.firstname} ${friend.lastname}`}</div>
                    <div className="mutualFriends">
                        <div className="icon">[o]</div>
                        <div className="text" >5 mutual friends</div>
                    </div>
                    <div className="confirm btn" onClick={handleConfirm}><div>Confirm</div></div>
                    <div className="delete btn" onClick={handleDelete}><div>Delete</div></div>
                </div>

            </div>






            <style jsx>{`
            
            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 5px;
                min-width: 200px;
                max-width: 250px;
                flex-basis: 0;
                flex-grow: 1;
                flex-shrink: 1;
                box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
                border: 1px solid #CED0D4;
                margin: 5px;
            }
            .photo {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;


            }

            .content {
                
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 5px;
                width: 100%;
            }
            .name {
                overflow-x: hidden;
                overflow-y: hidden;
                text-overflow: ellipsis;
                font-weight: 600;
            }
            .mutualFriends{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                margin: 5px 0px;
                
            }
            .text {
                color: gray;
                font-size: 13px;
            }

            .btn {
                width: 100%;
                height: 36px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 5px;
                cursor: pointer;
                
            }
            .btn:hover{
                filter: brightness(80%);
            }
            .btn:active{
                filter: brightness(120%)
            }
            .confirm{
                color: white;
                background: #1877F2;
            }
            .delete{
                color: black;
                background: #E4E6EB;
            }
            
            `}</style>
        </>

    )
}