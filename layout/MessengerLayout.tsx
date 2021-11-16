// @ts-nocheck
import MessengerLeftNav from "./MessengerLeftNav"

export default function MessengerLayout({ children }) {


    return (
        <>
            <div className="container">
                <div className="leftNav">
                    <MessengerLeftNav />
                </div>
                <div className="content">{children}</div>
            </div>





            <style jsx>{`
            .container{
                display:flex;
                flex-direction: row;
                height: calc(100vh - 65px);
                width: 100%;
                overflow: hidden;  
                background: white;     
            }
            .leftNav{
                overflow-y: scroll;
                min-width: 350px;
            }
            .content{
                overflow-y: scroll;
                flex-grow: 1;
                
            }
            
            `}</style>
        </>
    )
}