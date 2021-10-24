import React, { useEffect } from "react"
import PostDetailMenu from '../Home/PostDetailMenu'

export default function PostCard({ user, post }) {

    // useEffect(() => {
    //     document.addEventListener('click', (e) => { console.log(e.target) })
    // },[])

    
    return (
        <>
            <div className="container">
                <div className="profile">
                    <div className="profilePic">pic</div>
                    <div className="user">
                        <div className="userName">{user.data.firstName} {user.data.lastName}</div>
                        <div className="time">10hrs.O</div>
                    </div>
                    <PostDetailMenu user={user} post={post}/>
                </div>
                <div className="message">{post.posttext}</div>
                <div className="media">MEDIA</div>
                <div className="reactionPreview">
                    <div className="reactions">👍 18</div>
                    <div className="comments">4 comments</div>
                </div>
                <div className="addReaction">
                    <div className="like">like</div>
                    <div className="comment">comment</div>
                    <div className="share">share</div>
                </div>
            </div>





            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    width: 550px;
                    border-radius: 5px;
                    margin-top: 20px;
                    background-color: white;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                    
                }
                .profile {
                    display: flex;
                    flex-direction: row;
                    padding-left: 16px;
                    padding-right: 16px;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    border: solid green 1px;
                    position: relative;
                    
                }
                .user{
                    display: flex;
                    flex-direction: column;
                    flex:1;
                    margin-left: 5px;
                }
                .time {
                    margin-top: 3px;
                }

                .detail {
                    border: solid magenta 1px;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;    
                    text-align: center;  
            
                              
                }
                .detailMenu {
                    border: 1px solid red;
                    position: absolute;
                    left: 490px;
                    top: -57px;
                    list-style: none;
                    padding: 0;
                    line-height: 25px;
                }
                 
                .message {
                    padding-top: 5px;
                    padding-left: 16px;
                    padding-right: 16px;
                    padding-bottom: 16px;
                }
                
                .reactionPreview {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-left: 16px;
                    margin-right: 16px;
                    padding-bottom: 10px;
                    padding-top; 10px;
                }
                
                .addReaction {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-shrink: 0;
                    flex-wrap: nowrap;
                    align-items: stretch;
                    border-top: solid 1px lightgray;
                    
                    margin-left: 12px;
                    margin-right: 12px;
                    padding-top: 4px;
                    padding-bottom: 4px;
                }

                .like, .comment , .share {
                    display: flex;
                    flex-grow: 1;
                    flex-shrink: 0;
                    flex-basis: 0;
                    justify-content: center;
                    padding-top: 4px;
                    padding-bottom: 4px;
                    
                }

                `}
            </style>
        </>

    )
}