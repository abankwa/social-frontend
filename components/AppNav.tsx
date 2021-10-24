import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faHouseUser, faVideo, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import {  IoNotificationsCircleOutline } from 'react-icons/io5'
import { BsFillChatSquareTextFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'

export default function AppNav(){

    return (
        <>
            <div className="appHeader">
                <ul className="leftHeader">
                    <li><a href="#"><FontAwesomeIcon icon={faCoffee} size="2x" color="blue"/></a></li>
                </ul>
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

                    .leftHeader, .rightHeader, .middleHeader {
                    
                    list-style-type: none;
                    margin: 0;
                    padding: 0;

                    }

                    .leftHeader {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 150px;
                    border: solid green 1px;
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