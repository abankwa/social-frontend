// @ts-nocheck
import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import AppNav from '../components/AppNav';
import FriendLeftNav from './FriendLeftNav';

export default function FriendLayout({ children }) {



    return (
        <>
            <div className="container">
                <div className="leftNav">
                    <FriendLeftNav />
                </div>
                <div className="rightContent">
                    {children}
                </div>
            </div>





            {/* STYLE */}

            <style jsx>{`

                .container {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: calc(100vh - 65px); /* viewport minus height of navbar*/
                    overflow: hidden;
                }

                .leftNav {
                    width: 400px;
                    height: 100%;
                    overflow: scroll;
                    
                }
                .rightContent {
                    width: 100%;
                    height: 100%;  
                    overflow: scroll;

                }


                `}
            </style>
        </>
    )
}