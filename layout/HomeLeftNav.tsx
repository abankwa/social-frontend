// @ts-nocheck
import React from 'react'
import Link from 'next/link'
import {useSelector,useDispatch} from 'react-redux'

export default function HomeLeftNav(){

    // const {value} = useSelector(state => state.userContext)
    

    // const firstName = value.data.firstName;
    // const lastName = value.data.lastName;
    const firstName = 'kk'
    const lastName = 'kk'



    return (
        <>
            <div className="homeLeftNav">
                <Link href="/home/profile">
                <div className="item">
                    <div className="icon"></div><div >{`${firstName} ${lastName}`}</div>
                </div>
                </Link>
                <Link href="/friends">
                <div className="item">
                    <div className="icon"></div><div >Friends</div>
                </div>
                </Link>
                <Link href="/messages">
                <div className="item">
                    <div className="icon"></div><div >Messenger</div>
                </div>
                </Link>
                <Link href="/home/marketplace">
                <div className="item">
                    <div className="icon"></div><div >Marketplace</div>
                </div>
                </Link>
            </div>




            {/* STYLE */}

            <style jsx>{`
                
                .homeLeftNav {
                    display: flex;
                    flex-direction: column; 
                    margin-left: 20px;
                    margin-top: 10px;
                 }

                 .icon {
                     height: 40px;
                     width: 40px;
                     border-radius: 50%;
                     background: lightgray;
                     margin-right: 10px;
                 }
                 .item {
                     display: flex;
                     justify-content: flex-start;
                     align-items: center;
                     border-radius: 5px;
                     padding: 2px 0px;
                     font-size: 15px;
                    
                     
                 }
                 .item:hover{
                     background: lightgray;
                     cursor: pointer;
                 }
                 

                `}
            </style>
        </>
    )
}