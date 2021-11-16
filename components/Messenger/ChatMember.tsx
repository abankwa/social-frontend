// @ts-nocheck
import { useDispatch } from "react-redux"
import { removeChatMember } from '../../lib/store/messengerSlice'

export default function ChatMember({ friend }) {

    const dispatch = useDispatch()

    //remove friend from chat participant list
    function handleRemoveMember(e){
        dispatch(removeChatMember(friend))
    }


    return (
        <>
            <div className="container" >
                <div className="name">{`${friend.userid} ${friend.firstname} ${friend.lastname}`}</div>
                <div className="close" onClick={handleRemoveMember}><div>x</div></div>
            </div>




            <style jsx>{`
                    .container {
                    display: flex;
                    justify-content: space-between;
                    padding: 5px;
                    border-radius: 5px;
                    background: lightblue;
                    height: 30px;
                }
                
                    .close{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .close:hover{
                    cursor: pointer;
                    background: lightgray;
                }
        
                
            `}</style>
        </>
    )

}