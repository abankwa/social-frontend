// @ts-nocheck
import { useRouter } from "next/router";
import { useEffect } from "react";
import {CgMoreAlt} from 'react-icons/cg'

export default function AllFriendsCard({ friend }) {
    const router = useRouter()


    const firstname = friend.firstname;
    const lastname = friend.lastname;

    function handleClick(e) {
        e.preventDefault()
        localStorage.setItem("KEY1", "1");
        router.push(`/${friend.userid}`)
    }

    return (
        <>
            <div className="container" onClick={handleClick}>
                <div className="person">
                    <div className="photo"></div>
                    <div className="nameBox">
                        <div className="name">{`${firstname} ${lastname}`}</div>
                        <div className="mutualFriends">5 mutual friends</div>
                    </div>

                </div>
                <div className="details"><CgMoreAlt color="gray"/></div>
            </div>




            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 70px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                .container:hover{
                    background: lightgray;
                }

                .person {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px;
                    padding-left: 0px;
                }

                .photo {
                    border: 1px lightgray solid;
                    border-radius: 50%;
                    height: 60px;
                    width: 60px;
                    background: green;
                }
                .nameBox {
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .name{
                    font-weight: bold;
                    margin-bottom: 2px;
                }
                .mutualFriends{
                    color: gray;
                    font-size: 13px;
                    margin-top: 2px;
                }
                .details{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                }
                .details:hover{
                    background: gray;
                }
                
                `}</style>
        </>
    )
}