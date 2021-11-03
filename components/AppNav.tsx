import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faHouseUser, faVideo, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import {  IoNotificationsCircleOutline } from 'react-icons/io5'
import { BsFillChatSquareTextFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import SearchBar from './Home/SearchBar'

export default function AppNav(){

    return (
        <>
            <div className="appHeader">
                <div className="leftHeader">
                    
                    <div className="searchBar">
                        <SearchBar />
                    </div>
                </div>
                <ul className="middleHeader">
                    <li><Link href="/home"><a ><FontAwesomeIcon icon={faHouseUser} size="2x"/></a></Link></li>
                    <li><Link href="/video"><a><FontAwesomeIcon icon={faVideo} size="2x"/></a></Link></li>
                    <li><Link href="/news"><a><FontAwesomeIcon icon={faNewspaper} size="2x"/></a></Link></li>
                </ul>
                <ul className="rightHeader">
                    <li><a href="#"><FaUserCircle size="25px"/></a></li>
                    <li><a href="#"><BsFillChatSquareTextFill size="25px"/></a></li>
                    <li><a href="#"><IoNotificationsCircleOutline size="25px"/></a></li>
                </ul>
            </div>




            {/* STYLE */ }

            <style jsx>{`

                .appHeader {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    /*border-bottom: 1px solid gray;*/
                    align-items: center;
                    height: 60px;
                    position: sticky;
                    top: 0px;
                    background-color: white;
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
                    border: solid green 1px;
                    }

                    .logo {
                        border: solid gray 1px;
                        border-radius: 50%;
                        height: 40px;
                        width: 40px;
                        display: inline-block;
                    }
                    .searchBar {
                        display: inline-block;
                    }

                    .middleHeader {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 500px;
                    border: solid green 1px;
                    }

                    .rightHeader {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: solid green 1px;
                    width: 150px;
                    }

                    li :hover {
                    background: lightslategrey;
                    border-radius: 2px;
                    }

                    .middleHeader li {
                        padding: 10px;
                        border-radius: 5px;
                    }

                    .rightHeader li {
                        padding: 5px;
                    }


                `}
            </style>
        </>
    )
}