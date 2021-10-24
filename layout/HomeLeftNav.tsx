
import React from 'react'
import Link from 'next/link'

export default function HomeLeftNav(){
    return (
        <>
            <div className="homeLeftNav">
                <div><h2>home left nav</h2> </div>
                <div><Link href="/home/profile">Profile</Link></div>
                <div><Link href="/home/friends">Friends</Link></div>
                <div><Link href="/home/friend-requests">Friend Requests</Link></div>
                <div><Link href="/home/messenger">Messenger</Link></div>
                <div>item2</div>
            </div>




            {/* STYLE */}

            <style jsx>{`
                
                .homeLeftNav {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid gray;  
                 }

                `}
            </style>
        </>
    )
}