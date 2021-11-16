// @ts-nocheck
import SiteLayout from "./SiteLayout"
import Link from 'next/link'
import { useSelector } from 'react-redux'


export default function FriendProfileLayout({children}) {
    
    const friendId = useSelector(state => state.friendId.value)
  
    return (
        <>
            <div>
                <div className="topHalf">
                    <div className="backdropContainer">
                        <div className="backdrop"></div>
                        <div className="image">image</div>
                    </div>
                    <div className="name">
                        <h1>John Macadamia</h1>
                    </div>
                    <div className="separator"><div></div></div>
                    <div className="profileNav">

                        <div className="navContainer">
                            <div className="leftNav">
                                <Link href={`/${friendId}/posts`}><div className="leftItem">Posts</div></Link>
                                <Link href={`/${friendId}/about`}><div className="leftItem">About</div></Link>
                                <Link href={`/${friendId}/friends`}><div className="leftItem">Friends</div></Link>
                                <Link href={`/${friendId}/photos`}><div className="leftItem">Photos</div></Link>
                                <Link href={`/${friendId}/videos`}><div className="leftItem">videos</div></Link>
                                <Link href="#"><div className="leftItem">More</div></Link>
                            </div>
                            <div className="rightNav">
                                <div className="friends">Friends</div>
                                <div className="message">Message</div>
                                <div className="detail">...</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="bottomHalf">
                    <div className="contentContainer">
                        {children}
                    </div>
                </div>







                <style jsx>{`
                    .topHalf {
                        border: 1px lightslategrey solid;
                        background: white;
                    }

                    .backdropContainer{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                    }

                    .backdrop {
                        width: 900px;
                        height: 400px;
                        background: lightslategrey;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }

                    .name {
                        display:flex;
                        justify-content: center; 
                    }

                    .profileNav{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 100%;
                    }
                    .separator{
                        
                        display: flex;
                        justify-content: center;
                    }
                    .separator div {
                        border-bottom: solid 1px lightslategrey;
                        margin-bottom: 5px;
                        width: 800px;
                    }

                    .navContainer {
                        display: flex;
                        flex-direction:row;
                        align-items: center;
                        justify-content: space-between;
                        width: 800px;
                        height: 50px;
                        margin-bottom: 5px;
                    }

                    .leftNav, .rightNav {
                        
                        
                    }
                    .leftNav{
                        display:flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-around;
                        width: 60%;
                        height: 100%;
                        
                    }
                    .leftItem {
                        flex-grow: 1;
                        flex-basis: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        color: gray;
                        padding: 15px;
                        cursor: pointer;
                        
                    }
                    .leftItem:hover{
                        background: #F0F2F5;
                        border-radius: 5px;
                    }
                    .rightNav{
                        display:flex;
                        flex-direction: row;
                        justify-content: space-between;
                        
                    }
                    .message{
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: #1877F2;
                        color: white;
                    }
                    .friends {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: gray;
                    }
                    .detail {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: gray;
                        
                    }
                    
                    
                    .bottomHalf{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }
                    .contentContainer {
                        width: 800px;
                        height: 200px;
                        border: solid lightslategrey 1px;
                    }


                    `}</style>
            </div>
        </>
    )
}




FriendProfileLayout.getLayout = function getLayout(page) {

    return (
        <SiteLayout>
            {page}
        </SiteLayout>
    )
}