
import React from 'react'
import Link from 'next/link'
import {useSelector,useDispatch} from 'react-redux'
import AppNav from '../components/AppNav';
import FriendLeftNav from './FriendLeftNav';

export default function FriendLayout({children}){

    const {value} = useSelector(state => state.userContext)
    
    
    const firstName = value.data.firstName;
    const lastName = value.data.lastName;



    return (
        <>
            <div className="container">
                <AppNav />
                <div className="contentArea">
                    <div className="leftNav">
                        <FriendLeftNav />
                    </div>
                    <div className="rightContent">
                        {children}
                    </div>
                </div>
 
            </div>




            {/* STYLE */}

            <style jsx>{`
                .contentArea {
                    display: flex;
                    flex-direction: row;
                }

                .leftNav {
                    width: 300px;
                    
                }
                .rightContent {
                    flex-grow: 1

                }


                `}
            </style>
        </>
    )
}