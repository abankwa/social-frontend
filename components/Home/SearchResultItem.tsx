
import { useSelector, useDispatch } from 'react-redux'
import { setFriendId } from "../../lib/store/friendSlice";
import { useRouter } from "next/router";


export default function SearchResultItem({ item }) {

    const router = useRouter()
    const dispatch = useDispatch()

    //when we select a search result store and associated personId into
    //the friendId reduxstore. this will be used to route to friend profile pages.
    //then route to the friend's profile page
    function handleItemClick(e) {
        e.preventDefault()
        dispatch(setFriendId(item.userid))
        //router.push(`/${item.userid}/posts`)
        router.push(`/${item.userid}`)
        //window.location.href = `/${item.userid}`
        localStorage.setItem('LAST_FRIENDID_SEARCHED',item.userid)

    }
    //TODO: also handle accessibilty where item is selected via keyboard
    //ie. onKeypress etc

    return (
        <>
            <div className="container" onClick={handleItemClick}>
                <div className="resultIcon"></div>
                <div className="resultText">
                    <div className="primaryText">{`${item.firstname} ${item.lastname}`}</div>
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