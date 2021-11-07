import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouseUser, faVideo, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
import { BsFillChatSquareTextFill,BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import SearchBar from './Home/SearchBar'
import SearchBar2 from './Home/SearchBar2'

export default function AppNav() {

    return (
        <>
            <div className="container">
                <div className="leftHeader">

                    <div className="searchBar">
                        <SearchBar2 />
                    </div>
                </div>
                <ul className="middleHeader">
                    <Link href="/home"><li className="midItem"><a ><FontAwesomeIcon icon={faHouseUser} size="2x" /></a></li></Link>
                    <Link href="/friends"><li className="midItem"><a ><FontAwesomeIcon icon={faHouseUser} size="2x" /></a></li></Link>
                    <Link href="/video"><li className="midItem"><a ><FontAwesomeIcon icon={faVideo} size="2x" /></a></li></Link>
                    <Link href="/news"><li className="midItem"><a ><FontAwesomeIcon icon={faNewspaper} size="2x" /></a></li></Link>
                </ul>
                <ul className="rightHeaderContainer">
                    <div className="rightHeader">
                        <Link href="#"><li className="rightItem"><a><FaUserCircle size="25px" /></a></li></Link>
                        <Link href="#"><li className="rightItem"><a><BsFillChatSquareTextFill size="25px" /></a></li></Link>
                        <Link href="#"><li className="rightItem"><a><IoNotificationsCircleOutline size="25px" /></a></li></Link>
                    </div>

                </ul>
            </div>




            {/* STYLE */}

            <style jsx>{`

                .container {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                    height: 65px;
                    position: sticky;
                    top: 0px;
                    background-color: white;
                    border-bottom: 1px lightgray solid;
                    z-index: 9999;
                    }

                     .rightHeader, .middleHeader {
                    
                    list-style-type: none;
                    margin: 0;
                    padding: 0;

                    }

                    .leftHeader {
                    display: flex;
                    align-items: center;
                    width: 250px;
                    height: 50px;
                    
                    }

                    .logo {
                        border: solid gray 1px;
                        border-radius: 50%;
                        height: 40px;
                        width: 40px;
                        display: inline-block;
                    }
                    .searchBar {
                        width: 100%;
                        height: 100%;
                    }

                    .middleHeader {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 500px;
                    }
                    .midItem{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    .midItem:hover{
                        background: lightslategrey;
                    }
                    .rightHeaderContainer {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 250px;
                    }
                    .rightHeader {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 180px;
                    
                    }
                    .rightItem{
                        width: 45px;
                        height: 45px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        background: #F0F2F9;;
                        
                    }

                    .rightItem:hover {
                        filter: brightness(80%)
                    }

                    .middleHeader li {
                        padding: 10px;
                        border-radius: 5px;
                        flex-basis: 0;
                        flex-grow: 1;
                    }

                    .rightHeader li {
                        padding: 5px;
                    }


                `}
            </style>
        </>
    )
}

