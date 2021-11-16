// @ts-nocheck

import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux"
import { addChatMember } from '../../lib/store/messengerSlice'


export default function MessengerSearchItem({ friend }) {

    const chatMembers = useSelector(state => state.messengerContext.chatMembers)
    const dispatch = useDispatch()
    

    //adds selected friend to chat participant list
    function handleItemClick(e) {
        e.preventDefault()
        dispatch(addChatMember(friend))
        
        
    }

    //TODO: also handle accessibilty where item is selected via keyboard
    //ie. onKeypress etc

    return (
        <>
            <div className="container" onClick={handleItemClick}>
                <div className="resultIcon"></div>
                <div className="resultText">
                    <div className="primaryText">{`${friend.userid} ${friend.firstname} ${friend.lastname}`}</div>
                    <div className="secondaryText">Friend</div>
                </div>
            </div>





            <style jsx>{`
            
            .container {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                
            }
            .container:hover {
                background: lightgray;
                border-radius: 6px;
                cursor: pointer;
            }
            .resultIcon {
                width: 30px;
                height: 30px;
                border: gray 1px solid;
                border-radius: 50%;
            }
            .resultText {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-left: 5px;
            }
            .secondaryText {
                color: gray;
                font-size: 13px;
            }
            
            `}

            </style>
        </>





    )
}