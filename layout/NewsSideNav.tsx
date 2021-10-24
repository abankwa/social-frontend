
import React from 'react'

export default function NewsSideNav(){
    return (
        <>
            <div className="newsSideNav">
                <div><h2>news side nav</h2> </div>
                <div>item1</div>
                <div>item2</div>
            </div>



            {/* STYLE */}

            <style jsx>{`
                .newsSideNav {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid gray;
                }

                `}
            </style>
        </>
    )
}