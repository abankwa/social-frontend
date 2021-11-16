// @ts-nocheck
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ConversationCard({data}) {
    
    const router = useRouter()

    function handleClick(e){
        router.push(`/messages/${data.conversationid}`)
    }

    return (
        <>

            <div className="container" onClick={handleClick}>
                <div className="profile">
                    <div className="photo"></div>
                    <div className="title">{data.conversationid}</div>
                </div>
                <div className="detail" >...</div>
            </div>







            <style jsx>{`
            
            .container {
                display: flex;
                justify-content: space-between;
                width: 100%;
                border: lightgray solid 1px;
            }

            .profile {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .photo {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                background: lightgray;
            }
            
        
        `}</style>
        </>
    )
}