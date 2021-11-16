// @ts-nocheck
import { FiMoreVertical, FiSmile } from 'react-icons/fi'
import { GoReply } from 'react-icons/go'

export default function IncomingMessageCard({text}) {

    return (
        <>
            <div className="container">
                <div className="inMessageBar">
                    <div className="inMessage">{text}</div>
                    <div className="react"><FiSmile /></div>
                    <div className="reply"><GoReply /></div>
                    <div className="more"><FiMoreVertical /></div>
                </div>

            </div>


            <style jsx>{`

                 .container {
                    margin-bottom: 5px;
                }
                .inMessageBar{
                    display: flex;
                    justify-content: flex-start;
                    align-content: center;
                }
                .inMessage {
                    max-width: 300px;
                    border-radius: 10px;
                    background: lightgray;
                    color: black;
                    padding: 5px;
                    font-size: 12px;
                }
                .inMessageBar > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 5px;
                }

            
            `}</style>
        </>
    )
}