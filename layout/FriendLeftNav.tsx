
import React, { Children } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

export default function FriendLeftNav() {

    const { value } = useSelector(state => state.userContext)


    const firstName = value.data.firstName;
    const lastName = value.data.lastName;



    return (
        <>
            <div className="container">
                <h1>Friends</h1>
                <div className="menu">
                <Link href="/friends">
                        <div className="itemContainter">
                            <div className="left">
                                <div className="icon"></div><div >Home</div>
                            </div>
                            <div className="right">
                                >
                            </div>
                            
                        </div>
                    </Link>
                    <Link href="/friends/requests">
                        <div className="itemContainter">
                            <div className="left">
                                <div className="icon"></div><div >Friend Requests</div>
                            </div>
                            <div className="right">
                                >
                            </div>
                            
                        </div>
                    </Link>
                    <Link href="/friends/suggestions">
                        <div className="itemContainter">
                            <div className="left">
                                <div className="icon"></div><div >Suggestions</div>
                            </div>
                            <div className="right">
                                >
                            </div>
                            
                        </div>
                    </Link>
                    <Link href="/friends/list">
                        <div className="itemContainter">
                            <div className="left">
                                <div className="icon"></div><div >All Friends</div>
                            </div>
                            <div className="right">
                                >
                            </div>
                            
                        </div>
                    </Link>
                    <Link href="/friends/birthdays">
                        <div className="itemContainter">
                            <div className="left">
                                <div className="icon"></div><div >Birthdays</div>
                            </div>
                            <div className="right">
                                >
                            </div>
                            
                        </div>
                    </Link>
                    <Link href="/friends/friendlists">
                        <div className="itemContainter">
                            <div className="left">
                                <div className="icon"></div><div >Custom Lists</div>
                            </div>
                            <div className="right">
                                >
                            </div>
                            
                        </div>
                    </Link>
                </div>

            </div>




            {/* STYLE */}

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    margin-left: 15px;

                }

                .menu {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                }

                .itemContainter{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .icon {
                     height: 40px;
                     width: 40px;
                     border-radius: 50%;
                     background: lightgray;
                     margin-right: 10px;
                 }

                 .left {
                     display: flex;
                     justify-content: flex-start;
                     align-items: center;
                     padding: 2px 0px;
                     font-size: 15px;
                 }
                .right {
                    height: 40px;
                    width: 40px;
                    
                }
                     
                 }
                 .itemContainter:hover{
                     background: lightgray;
                     cursor: pointer;
                     border-radius: 5px;
                 }
                 

                

                `}
            </style>
        </>
    )
}