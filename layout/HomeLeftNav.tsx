
import React from 'react'

export default function HomeLeftNav(){
    return (
        <>
            <div className="homeLeftNav">
                <div><h2>home left nav</h2> </div>
                <div>Profile</div>
                <div>Friends</div>
                <div>Friend Requests</div>
                <div>Messanger</div>
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