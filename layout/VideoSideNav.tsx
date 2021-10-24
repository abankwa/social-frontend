import React from 'react'

export default function VideoSideNav(){
    return (
        <>
            <div className="videoSideNav">
                <div><h2>video side nav</h2> </div>
                <div>item1</div>
                <div>item2</div>
            </div>



            {/* STYLE */}
            
            <style jsx>{`
                .videoSideNav {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid gray;
                }

                `}
            </style>
        </>
    )
}