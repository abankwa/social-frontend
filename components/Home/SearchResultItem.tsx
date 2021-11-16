// @ts-nocheck
import { useSelector, useDispatch } from 'react-redux'
import { setGenContext } from '../../lib/store/genContextSlice'
import { useRouter } from "next/router";
import { useEffect } from 'react';


export default function SearchResultItem({ item }) {

    const router = useRouter()

    //when we select a search result store and associated personId into
    //the friendId reduxstore. this will be used to route to friend profile pages.
    //then route to the friend's profile page
    function handleItemClick(e) {
        e.preventDefault()
        localStorage.setItem("KEY1", "0");
        router.push(`/${item.userid}`)
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