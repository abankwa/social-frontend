// @ts-nocheck
import React from 'react'

export default function HomeRightNav(){
    return (
        <>
            <div className="homeRightNav">
                <div><h2>home right nav</h2> </div>
                <div>item1</div>
                <div>item2</div>
                <div>item2</div>
                <div>item2</div>
                <div>item2</div>
            </div>




            {/* STYLE */}

            <style jsx>{`
                
                .homeRightNav {
                    display: flex;
                    flex-direction: column;
                    
                 }

                `}
            </style>
        </>
    )
}