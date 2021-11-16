// @ts-nocheck
import { FiMoreVertical, FiSmile } from 'react-icons/fi'
import { GoReply } from 'react-icons/go'
export default function OutgoingMessageCard({ text }) {

    return (
        <>
            <div className="container">
                <div className="outMessageBar">
                    <div className="more"><FiMoreVertical /></div>
                    <div className="reply"><GoReply /></div>
                    <div className="react"><FiSmile /></div>
                    <div className="outMessage">{text}</div>
                </div>
            </div>



            <style jsx>{`

                .container {
                    margin-bottom: 5px;
                }
            .outMessageBar{
                    display: flex;
                    justify-content: flex-end;
                    align-content: center;
                }
                .outMessage {
                    max-width: 300px;
                    border-radius: 10px;
                    background: #0084FF;
                    color: white;
                    padding: 5px;
                    font-size: 12px;
                }
                .outMessageBar > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 5px;
                }
                
                
                
            `}</style>
        </>
    )
}