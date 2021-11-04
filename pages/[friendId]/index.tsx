import SiteLayout from "../../layout/SiteLayout"
import { useEffect, useRef, useState } from "react"
import FriendPosts from '../../components/Friends/FriendPosts'
import { useRouter } from "next/router"
import FriendAbout from "../../components/Friends/FriendAbout"
import FriendFriends from '../../components/Friends/FriendFriends'
import FriendPhotos from "../../components/Friends/FriendPhotos"
import FriendVideos from "../../components/Friends/FriendVideos"
import useFetch from "../../lib/useFetch"
import myFetch from "../../lib/myFetch"
import FriendStatus from "../../components/Friends/FriendStatus"



export default function FriendProfilePage() {

    //ref booleans for switching the component depending on the nav button clicked.
    //we could use state variables but each variable change would cause a re-render.
    let postRef = useRef(true) // Post is the landing component for the index page hence set to true from the start.
    let aboutRef = useRef(false)
    let friendRef = useRef(false)
    let photoRef = useRef(false)
    let videoRef = useRef(false)


    const router = useRouter()

    const [forceRender, setForceRender] = useState(true)
    const [isUpdated, setIsUpdated] = useState(false)

    //updates a state variable to trigger a re-render. 
    function ForceRender() {
        setForceRender(!forceRender)
        return
    }



    // because we're not using getServerSideProps(), router.query is only populated on second render
    // after Automatic Static Optimization. friedId will be undefined in the first render
    const friendId = router.query.friendId

 

    //Call backend API to get friend data and verify if friend is valid
    //also populate the profile and background images 
    const { fetchData, isFetchError, isFetchLoading } = useFetch(`${friendId ? `http://localhost:4000/api/friend/${friendId}`: 'null'}`, 'GET', null, [friendId,isUpdated ])
   

    //GATEKEEPER pattern
    if(!fetchData) return <div>loading friend data ..</div>
    if(!friendId && isFetchError) return <div>error..</div>
    if(friendId && isFetchError) return <div>error..</div>

    //check whether data is non-empty else redirect to 404 page. this could happen
    //if the user directly entered a bogus friendId in the URL instead of clicking
    //on a search result.
    if (fetchData) {
        //empty data means no user found
        if (fetchData.status === 'success' && fetchData.data.length === 0) {
            console.log('no user found, redirect to 404 page')
            router.push('/404')
            return null
        }
        // login expired or some other error from API
        if (fetchData.status === 'error') {
            router.push('/')
            return null
        }
        
    }

    //console.log(fetchData)
    const [firstName, lastName] = [fetchData.data[0].firstname, fetchData.data[0].lastname]
    //isFriend.current = fetchData.data[1].isFriend;
    
    //console.log(isFriend)

    function handlePostClick(e) {
        e.preventDefault()
        postRef.current = true
        aboutRef.current = false
        friendRef.current = false
        photoRef.current = false
        videoRef.current = false
        ForceRender() // since modify a ref does not trigger a render, we force render
        // this would not be required if we used state variables to switch the component.

    }

    function handleAboutClick(e) {
        e.preventDefault()
        postRef.current = false
        aboutRef.current = true
        friendRef.current = false
        photoRef.current = false
        videoRef.current = false
        ForceRender()
    }

    function handleFriendClick(e) {
        e.preventDefault()
        postRef.current = false
        aboutRef.current = false
        friendRef.current = true
        photoRef.current = false
        videoRef.current = false
        ForceRender()
    }

    function handlePhotosClick(e) {
        e.preventDefault()
        postRef.current = false
        aboutRef.current = false
        friendRef.current = false
        photoRef.current = true
        videoRef.current = false
        ForceRender()
    }

    function handleVideosClick(e) {
        e.preventDefault()
        postRef.current = false
        aboutRef.current = false
        friendRef.current = false
        photoRef.current = false
        videoRef.current = true
        ForceRender()
    }

    function handleMoreClick(e) {
        e.preventDefault()
        // do nothing yet
    }



    return (
        <>
            {JSON.stringify(router.query) !== '{}' && <div>
                <div className="topHalf">
                    <div className="backdropContainer">
                        <div className="backdrop"></div>
                        <div className="image">image</div>
                    </div>
                    <div className="name">
                        <h1>{`${firstName} ${lastName}`}</h1>
                    </div>
                    <div className="separator"><div></div></div>
                    <div className="profileNav">

                        <div className="navContainer">
                            <div className="leftNav">
                                <div className="leftItem" onClick={handlePostClick}>Posts</div>
                                <div className="leftItem" onClick={handleAboutClick}>About</div>
                                <div className="leftItem" onClick={handleFriendClick}>Friends</div>
                                <div className="leftItem" onClick={handlePhotosClick}>Photos</div>
                                <div className="leftItem" onClick={handleVideosClick}>Videos</div>
                                <div className="leftItem" onClick={handleMoreClick}>More</div>
                            </div>
                            <div className="rightNav">
                                <FriendStatus friendId={friendId}/> 
                                <div className="message">Message</div>
                                <div className="detail">...</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="bottomHalf">
                    <div className="contentContainer">
                        {postRef.current && <FriendPosts friendId={friendId} />}
                        {aboutRef.current && <FriendAbout friendId={friendId} />}
                        {friendRef.current && <FriendFriends friendId={friendId} />}
                        {photoRef.current && <FriendPhotos friendId={friendId} />}
                        {videoRef.current && <FriendVideos friendId={friendId} />}
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
                        pointer-events: none;

                    }

                    .notFriends {
                        margin-left: 8px;
                        padding: 8px;
                        border-radius: 5px;
                        background: #1877F2;
                        cursor: pointer;
                        color: white;
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
            </div>}
        </>
    )
}

// export async function getServerSideProps() {

//     return { props: {} }
// }



FriendProfilePage.getLayout = function getLayout(page) {

    return (
        <SiteLayout>
            {page}
        </SiteLayout>
    )
}